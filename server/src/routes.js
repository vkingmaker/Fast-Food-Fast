import express from 'express';
import Order from './order';

const router = express.Router();

router.get('/', Order.getOrder);

export default router;