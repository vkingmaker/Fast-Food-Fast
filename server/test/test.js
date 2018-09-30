'use strict';
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../build/src/app');

let should = chai.should();


chai.use(chaiHttp);

//Our parent block
describe('Order', () => {
  beforeEach((done) => { //Before each test we empty the database
    done();
  });

  /*
   * Test the /DELETE route
   */
  describe('/DELETE order', () => {
    it('it should DELETE all the orders in the JSON file', (done) => {
      chai.request(server)
        .delete('/v1/order')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('The Order List has been Emptied successfully!');
          res.body.db.should.be.a('array');
          done();
        });
    });
  });
});
