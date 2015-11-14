module.exports = function (app) {

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function (req, res) {
        res.render('index'); // load our public/index.html file
    });
};