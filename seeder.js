var db = require('./config/db');

//var seeder = require('./Seeder/seeder.js');
var seeder = require('mongoose-seed');
var mongoose = require('mongoose');
var movies = require('./seeds/movies.json');
var series = require('./seeds/series.json');
var timeout = 10000;

// Connect to MongoDB via Mongoose
seeder.connect(db.url, function () {

    // Load Mongoose models
    seeder.loadModels([
        './models/series.js',
        './models/movie.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['Series', 'Movie'], function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(movies);
        seeder.populateModels(series);
    });
});

setTimeout(function () {
    console.log("Closing seeder");
    mongoose.disconnect();
}, timeout);
