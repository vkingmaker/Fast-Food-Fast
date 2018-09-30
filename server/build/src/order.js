"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require("./mock/db");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = (0, _db2.default)();

exports.default = {
  removeAll: function removeAll(req, res) {
    db = [];
    res.json({
      "message": "The Order List has been Emptied successfully!",
      db: db
    });
  }
};
module.exports = exports.default;