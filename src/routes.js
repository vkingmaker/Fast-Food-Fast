import express from 'express';
import Order from './order';

const router = express.Router();
import mock from './mock/db';
let db = mock();

/* GET home page. */
router.get('/', Order.getOrder);

router.get('/:id', Order.getOrderById);

router.post('/', Order.placeOrder);

router.put('/:id', Order.updateById);

export default router;