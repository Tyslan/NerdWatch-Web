// Dependencies
var express = require('express');
var router = express.Router();

// Model
var Nerd = require('./../models/nerd');
var Movie = require('./../models/movie');
var Serie = require('./../models/serie');

Nerd.methods(['get', 'put', 'post', 'delete']);
Nerd.register(router, '/nerds');

Movie.methods(['get', 'put', 'post', 'delete']);
Movie.register(router, '/movies');

Serie.methods(['get', 'put', 'post', 'delete']);
Serie.register(router, '/series');

module.exports = router;