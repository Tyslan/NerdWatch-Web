var db = require('./config/db');

//var seeder = require('./Seeder/seeder.js');
var seeder = require('mongoose-seed');
var movies = require('./seeds/movies.json')

// Connect to MongoDB via Mongoose
seeder.connect(db.url, function () {

    // Load Mongoose models
    seeder.loadModels([
        './models/movies.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['Movie'], function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(movies);

    });

    seeder.loadModels([
        './models/series.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['Series'], function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(movies);

    });
});