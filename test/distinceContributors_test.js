var expect = require('chai').expect;
var assert = require('chai').assert;
var app = require('../server');
var request = require('supertest');

var agent = request.agent(app);

describe('GET /api/distinctContributors', function () {
    it('should respond with 200 in case of valid request', function (done) {
        agent.get('/api/distinctContributors')
            .send()
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                var fetchedData = JSON.parse(res.text);

                expect(fetchedData).to.be.an('array');
                expect(fetchedData).to.not.empty;
                assert.lengthOf(fetchedData, 4, 'array has length of 4');

                fetchedData.forEach(function (contributor) {
                    expect(contributor).to.be.a('string');
                    expect(contributor).to.not.empty;
                });
                done();
            });
    });
});