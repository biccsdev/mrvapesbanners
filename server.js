const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');

const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');
const config = require('./config');

db(config.dbUrl);
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(`${config.publicRoute}`, express.static(path.join(__dirname, 'public')));
server.listen(config.port, function() {});
console.log(`Application listen on ${config.host}${config.port}`);
router(app);