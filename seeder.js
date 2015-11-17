var db = require('./config/db');

//var seeder = require('./Seeder/seeder.js');
var seeder = require('mongoose-seed');
var movies = require('./seeds/movies.json')
var series = require('./seeds/series.json')

var timeout = 10000;

// Connect to MongoDB via Mongoose
seeder.connect(db.url, function () {

    // Load Mongoose models
    seeder.loadModels([
        './models/series.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['Series'], function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(series);

    });

    // Load Mongoose models
    seeder.loadModels([
        './models/movie.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['Movie'], function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(movies);
    });
});

//hack to close seeder
setTimeout(function () {
    console.log("Seeder reached timeout of 10seconds");
    console.log("Close seeder");
    process.exit();
}, timeout);
