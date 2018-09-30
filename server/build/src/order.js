"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = require("./mock/db");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = (0, _db2.default)();

exports.default = {
    removeById: function removeById(req, res) {
        db.splice(req.params.id - 1, 1);
        res.json({
            "message": "Order Deleted Successfully id " + req.params.id
        });
    }
};
module.exports = exports.default;