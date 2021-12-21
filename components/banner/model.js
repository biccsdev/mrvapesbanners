const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    //will be an array of objects
    //banner: {
    name: String,
    img: { data: Buffer, contentType: String }
    //}
});

const model = mongoose.model('banners', mySchema);
module.exports = model;