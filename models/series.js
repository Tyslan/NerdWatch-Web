// app/models/serie.js

var restful = require('node-restful');
var mongoose = require('mongoose');

// define our nerd model
var serieSchema = new mongoose.Schema({
    title: String,
    description: String,
    storyline: String,
    nrOfSeasons: Number,
    year: Number,
    genres: Array
});

// module.exports allows us to pass this to other files when it is called
module.exports = restful.model('Series', serieSchema);