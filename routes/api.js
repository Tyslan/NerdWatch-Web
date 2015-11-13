// app/routes.js

// Dependencies
var express = require('express');
var router = express.Router();

// Model
var Nerd = require('./../models/nerd');

Nerd.methods(['get', 'put', 'post', 'delete']);
Nerd.register(router, '/nerds');

module.exports = router;

//module.exports = function(app) {
//
//    // server routes ===========================================================
//    // handle things like api calls
//    // authentication routes
//    console.log("in routes")
//    // sample api route
//    app.get('/api/nerds', function(req, res) {
//        // use mongoose to get all nerds in the database
//        console.log("in get")
//        Nerd.find(function(err, nerds) {
//
//            // if there is an error retrieving, send the error.
//            // nothing after res.send(err) will execute
//            if (err)
//                res.send(err);
//
//            res.json(nerds); // return all nerds in JSON format
//        });
//    });
//
//    // route to handle creating goes here (app.post)
//    // route to handle delete goes here (app.delete)
//
//    // frontend routes =========================================================
//    // route to handle all angular requests
//    app.get('*', function(req, res) {
//        res.sendfile('./public/views/index.html'); // load our public/index.html file
//    });
//
//};