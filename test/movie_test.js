var expect = require('chai').expect;
var app = require('../server');
var request = require('supertest');

var agent = request.agent(app);

describe('GET /api/movies', function () {
    it('should respond with 200 in case of valid request', function (done) {
        agent.get('/api/movies')
            .send()
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                var fetchedData = JSON.parse(res.text);
                expect(fetchedData).to.be.an('array');
                expect(fetchedData).to.not.empty;

                fetchedData.forEach(function (movie) {
                    expect(movie).to.have.all.keys('_id', 'description', 'genres', 'storyline',
                        'title', 'year', 'upvotes');
                    expect(movie.genres).to.be.an('array');
                });
                done();
            });
    });
});