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
   * Test the /GET route
   */
  describe('/GET order', () => {
    it('it should GET all the orders', (done)=>{
      chai.request(server)
        .get('/v1/order')
        .end((err, res)=>{
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(5);
          done();
        });
    });
  });
});