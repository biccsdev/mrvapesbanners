const store = require('./store');

function addBanner(filename, bannerName, banner, path) {
    if (!banner) {
        return Promise.reject(' [controller] Invalid Input');
    }
    var fileUrl = '';
    if (filename) {
        fileUrl = `http://localhost:3000/app/files/${filename}`;
    }
    const bannerObj = {
        name: bannerName,
        img: banner,
        url: fileUrl,
    };
    return store.add(bannerObj, path);
}

function getBanners() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

function deleteBanner(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Invalid ID');
            return false;
        }
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            })
    });
}

module.exports = {
    addBanner,
    getBanners,
    deleteBanner
}