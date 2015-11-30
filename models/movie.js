// app/models/movie.js

var restful = require('node-restful');
var mongoose = require('mongoose');

// define our nerd model
var movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    storyline: String,
    year: String,
    genres: Array,
    upvotes: {type: Number, default: 0}
});

movieSchema.methods.upvote = function(cb) {
    this.upvotes += 1;
    this.save(cb);
};

// module.exports allows us to pass this to other files when it is called
module.exports = restful.model('Movie', movieSchema);