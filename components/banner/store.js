const Model = require('./model');
const fs = require('fs');

function addBanner(banner, path) {
    const myBanner = new Model(banner);
    myBanner.img.data = fs.readFileSync(path);
    myBanner.img.contentType = 'image/png';
    return myBanner.save();
}

function getBanners() {
    const banners = Model.find();
    return banners;
}

function removeBanner(id) {
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addBanner,
    list: getBanners,
    remove: removeBanner,
}