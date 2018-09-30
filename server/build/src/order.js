'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = require('./mock/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = (0, _db2.default)();

exports.default = {
    getOrderById: function getOrderById(req, res) {
        var particularOrder = db.filter(function (value) {
            if (value.id === +req.params.id) {
                return value;
            }
        });
        res.json(particularOrder);
    }
};
module.exports = exports.default;