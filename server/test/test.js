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
   * Test the /DELETE/:id route
   */
describe('/DELETE/:id order', () => {
it('it should DELETE an order given the id', (done) => {
  let order = {
    "id": 2,
    "Date": "8/30/2018",
    "Name": "Ufomba Victoria",
    "Address": "1b Nweke street Aba, Abia State",
    "Tel.No": "07061277913",
    "Order": "Nsala and fufu",
    "Instruction": "should be served HOT",
    "status": "Accepted"
  }
    chai.request(server)
      .delete('/v1/order/' + order.id)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql(`Order Deleted Successfully id ${order.id}`);
        done();
      });
  });
});
});
