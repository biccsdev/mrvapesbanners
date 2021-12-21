const express = require('express');
const banner = require('../components/banner/network');

const routes = function(server) {
    server.use('/banner', banner);
}

module.exports = routes;