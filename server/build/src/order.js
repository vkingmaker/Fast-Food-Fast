"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require("./mock/db");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = (0, _db2.default)();

exports.default = {
  updateById: function updateById(req, res) {
    var updatedOrder = {};
    db.splice(req.params.id - 1, 1, req.body);
    updatedOrder = req.body;
    res.json({
      "message": "Your Order has been Updated id " + req.params.id,
      updatedOrder: updatedOrder
    });
  }
};
module.exports = exports.default;