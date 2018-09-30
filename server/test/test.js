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
   * Test the /GET/:id route
   */
  describe('/GET/:id order', () => {
    it('it should GET an order by the given id', (done) => {
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
        .get('/v1/order/' + order.id)
        .send(order)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body[0].should.have.property('id');
          res.body[0].should.have.property('Date');
          res.body[0].should.have.property('Name');
          res.body[0].should.have.property('Address');
          res.body[0].should.have.property('id').eql(order.id);
          done();
        });
    });
  });
});
