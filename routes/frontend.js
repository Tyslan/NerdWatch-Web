// Dependencies
var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
var jwt = require('express-jwt');

var router = express.Router();
var User = mongoose.model('User');

var secret = process.env.SECRET || 'SECRET';
// Authentication middleware
var auth = jwt({secret: secret, userProperty: 'payload'});

// frontend routes
// route to handle all angular requests
router.get('*', function(req, res, next) {
    res.sendfile('./public/index.html'); // load our public/index.html file
});

router.post('/register', function(req, res, next){
    if(!req.body.username || !req.body.password){
        return res.status(400).json({message: 'Please fill out all fields'});
    }

    var user = new User();

    user.username = req.body.username;

    user.setPassword(req.body.password);

    user.save(function (err){
        //if(err){ return next(err); }
        if(err){
            res.status(409).json({message: 'User Exists'});
        }

        return res.json({token: user.generateJWT()});
    });
});

router.post('/login', function(req, res, next){
    if(!req.body.username || !req.body.password){
        return res.status(400).json({message: 'Please fill out all fields'});
    }

    passport.authenticate('local', function(err, user, info){
        if(err){ return next(err); }

        if(user){
            return res.json({token: user.generateJWT()});
        } else {
            return res.status(401).json(info);
        }
    })(req, res, next);
});

module.exports = router;