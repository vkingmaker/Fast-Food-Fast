import express from 'express';
import Order from './order';

const router = express.Router();

router.post('/', Order.placeOrder);

export default router;