import express from 'express';
import Order from './order';

const router = express.Router();

router.get('/:id', Order.getOrderById);

export default router;