var db = require('./config/db');

var mongoose = require('mongoose');
var Movie = require('./models/movie');
var Series = require('./models/series');
var movies = require('./seeds/movies');
var series = require('./seeds/series');

console.log("Connecting to database")
mongoose.connect(db.url);
dropCollectionForModel(Movie);
dropCollectionForModel(Series);
seedCollectionForModel(Movie, movies);
seedCollectionForModel(Series, series);
console.log("Closing connection");
mongoose.disconnect();

function dropCollectionForModel(model){
    var modelName =  model.collection.collectionName;
    console.log("Dropping " + modelName +"...");
    model.collection.remove();
    console.log(modelName + " was dropped");
}

function seedCollectionForModel(model, data){
    var modelName =  model.collection.collectionName;
    console.log("Seeding " + modelName + "...");
    model.collection.insert(data);
    insertCompleteMessage(modelName, data.length);
}

function insertCompleteMessage(modelName, count) {
    var string = count + " documents added to " + modelName + "!";
    console.log(string);
}