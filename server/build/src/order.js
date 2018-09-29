"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = require("./mock/db");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = (0, _db2.default)();

exports.default = {
    getOrder: function getOrder(req, res) {
        if (db) res.statusCode = 200;
        return res.json(db);
    },
    placeOrder: function placeOrder(req, res) {
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
    }
};
module.exports = exports.default;