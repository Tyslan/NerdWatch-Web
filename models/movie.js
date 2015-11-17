// app/models/nerd.js

var restful = require('node-restful');
var mongoose = require('mongoose');

// define our nerd model
var movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    year: Number,
    genres: Array,
    cast: Array
});

// module.exports allows us to pass this to other files when it is called
module.exports = restful.model('Movie', movieSchema);