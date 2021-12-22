const express = require('express');
const multer = require('multer');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');
const path = require('path');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../../public/files'))
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage })
    // const upload = multer({ dest: 'public/files/' })


router.post('/', upload.single('file'), function(req, res) {
    console.log(req.body);
    console.log(req.file);
    controller.addBanner(req.body.name, req.file, req.file.path)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error', "Simulated Error", 400, e);
        });
});

router.post('/:id', function(req, res) {
    controller.deleteBanner(req.params.id)
        .then(() => {
            response.success(req, res, `Imagen con id: ${req.params.id} ,eliminada`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        })
});

router.get('/', function(req, res) {
    controller.getBanners()
        .then((banners) => {
            response.success(req, res, banners, 200);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        })
});

router.delete('/:id', function(req, res) {
    controller.deleteBanner(req.params.id)
        .then(() => {
            response.success(req, res, `Imagen con id: ${req.params.id} ,eliminada`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        })
});

module.exports = router;