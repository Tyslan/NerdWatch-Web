// app/models/serie.js

var restful = require('node-restful');
var mongoose = require('mongoose');

// define our nerd model
var seriesSchema = new mongoose.Schema({
    title: String,
    description: String,
    storyline: String,
    nrOfSeasons: Number,
    firstYear: String,
    lastYear: String,
    genres: Array,
    upvotes: {type: Number, default: 0}
});

seriesSchema.methods.upvote = function(cb) {
    this.upvotes += 1;
    this.save(cb);
};

// module.exports allows us to pass this to other files when it is called
module.exports = restful.model('Series', seriesSchema);