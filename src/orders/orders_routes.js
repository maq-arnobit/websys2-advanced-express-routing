const express = require('express');
const app = express();

const ordersController = require('./orders_controller');
const router = express.Router();

router.get('/orders/',ordersController.getAllOrders);

module.exports = router;