import express from 'express';
import Order from './order';

const router = express.Router();

router.get('/', Order.getOrder);
router.post('/', Order.placeOrder);

export default router;