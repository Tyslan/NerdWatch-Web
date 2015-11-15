// Dependencies
var express = require('express');
var router = express.Router();

// Model
var Nerd = require('./../models/nerd');

Nerd.methods(['get', 'put', 'post', 'delete']);
Nerd.register(router, '/nerds');

module.exports = router;