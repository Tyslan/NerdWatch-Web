var expect = require('chai').expect;
var app = require('../server');
var request = require('supertest');

var agent = request.agent(app);

describe('GET /api/series', function () {
    it('should respond with 200 in case of valid request', function (done) {
        agent.get('/api/series')
            .send()
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                var fetchedData = JSON.parse(res.text);
                expect(fetchedData).to.be.an('array');
                expect(fetchedData).to.not.empty;

                fetchedData.forEach(function (series) {
                    expect(series).to.have.all.keys('_id', 'description', 'genres', 'storyline', 'title', 'firstYear', 'lastYear', 'nrOfSeasons');
                    expect(series.genres).to.be.an('array');
                    expect(series.nrOfSeasons).to.be.a('Number');
                });
                done();
            });
    });
});