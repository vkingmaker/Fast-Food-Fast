'use strict';
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../build/src/app');

let should = chai.should();


chai.use(chaiHttp);

describe('Order', () => {
  beforeEach((done) => { 
    done();
  });

/*
 * Test the /POST route
 */
  describe('/GET order', function () {
    it('it should GET all the orders', function (done) {
      chai.request(server)
        .get('/v1/order')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(5);
          done();
        });
    });
  });
// });


describe('/POST order', () => {
  it('it should POST an Order if the ORDER property has a value', (done) => {
    let order = {
      "id": 1,
      "Date": "8/30/2018",
      "Name": "Monday Victor Akubudike",
      "Address": "7b Oyadiran Estate Sabo, Yaba",
      "Tel.No": "07031977216",
      "status": "pending"
    }
    chai.request(server)
      .post('/v1/order')
      .send(order)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
  it('it should POST an order ', (done) => {
    let order = {
      "id": 1,
      "Date": "8/30/2018",
      "Name": "Monday Victor Akubudike",
      "Address": "7b Oyadiran Estate Sabo, Yaba",
      "Tel.No": "07031977216",
      "Order": "Fried Rice with chicken",
      "Instruction": "I love my chicken spicy and grilled",
      "status": "pending"
    }
    chai.request(server)
      .post('/v1/order')
      .send(order)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Your order has been placed!');
        res.body.addedOrder.should.have.property('id');
        res.body.addedOrder.should.have.property('Name');
        res.body.addedOrder.should.have.property('Address');
        res.body.addedOrder.should.have.property('Tel.No');
        res.body.addedOrder.should.have.property('Order');
        res.body.addedOrder.should.have.property('Instruction');
        res.body.addedOrder.should.have.property('status');
        done();
      });
  });
});
});