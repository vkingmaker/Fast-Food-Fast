'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _order = require('./order');

var _order2 = _interopRequireDefault(_order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET home page. */
router.put('/:id', _order2.default.updateById);

router.get('/', _order2.default.getOrder);
router.get('/:id', _order2.default.getOrderById);

router.post('/', _order2.default.placeOrder);

router.delete('/:id', _order2.default.removeById);
router.delete('/', _order2.default.removeAll);

exports.default = router;
module.exports = exports.default;