"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require("./mock/db");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = (0, _db2.default)();

exports.default = {
  getOrder: function getOrder(req, res, next) {
    return res.json(db);
  },
  getOrderById: function getOrderById(req, res, next) {
    var particularOrder = db.filter(function (value) {
      if (value.id === +req.params.id) return value;
    });
    res.json(particularOrder);
  },
  placeOrder: function placeOrder(req, res, next) {
    var addedOrder = {};
    if (db.length) {
      req.body.id = db[db.length - 1].id + 1;
      addedOrder = req.body;
      db.push(req.body);
    } else {
      req.body.id = 1;
      addedOrder = req.body;
      db.push(req.body);
    }

    res.json({
      "message": "Your order has been placed!",
      addedOrder: addedOrder
    });
  },
  updateById: function updateById(req, res, next) {
    var updatedOrder = {};
    db.splice(req.params.id - 1, 1, req.body);
    updatedOrder = req.body;
    res.json({
      "message": "Your Order has been Updated id " + req.params.id,
      updatedOrder: updatedOrder
    });
  },
  removeById: function removeById(req, res, next) {
    db.splice(req.params.id - 1, 1);
    res.json({
      "message": "Order Deleted Successfully id " + req.params.id
    });
  }
};
module.exports = exports.default;