'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _order = require('./order');

var _order2 = _interopRequireDefault(_order);

var _db = require('./mock/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var db = (0, _db2.default)();

/* GET home page. */
router.get('/', _order2.default.getOrder);

router.get('/:id', _order2.default.getOrderById);

router.post('/', _order2.default.placeOrder);

router.put('/:id', _order2.default.updateById);

router.delete('/:id', _order2.default.removeById);

exports.default = router;
module.exports = exports.default;