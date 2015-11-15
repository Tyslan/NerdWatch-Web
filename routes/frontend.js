// Dependencies
var express = require('express');
var router = express.Router();

// frontend routes
// route to handle all angular requests
router.get('*', function(req, res, next) {
    res.sendfile('./public/index.html'); // load our public/index.html file
});

module.exports = router;