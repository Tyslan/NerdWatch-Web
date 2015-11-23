var expect = require('chai').expect;
var app = require('../server');
var request = require('supertest');

var agent = request.agent(app);

describe('GET /movies', function () {
    it('should respond with 200 in case of valid request', function (done) {
        agent.get('/movies')
            .send()
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                var fetchedData = JSON.parse(res.text);
                expect(fetchedData).to.be.an('array');
                expect(fetchedData).to.not.empty;

                var movie = fetchedData[0];

                if(movie){
                    console.log('movie', movie);
                    expect(movie).to.have.all.keys('__v', '_id', 'comments', 'upvotes', 'link', 'title');
                    expect(movie.genres).to.be.an('array');
                    expect(post.year).to.be.a('number');
                }
                done();
            });
    });
});