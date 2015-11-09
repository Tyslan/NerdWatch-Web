// config/db.js
var connectionString = process.env.MONGOLAB_URI || "mongodb://localhost:27017/project_webapp";

module.exports = {
    url : connectionString
}