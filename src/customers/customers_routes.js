const express = require('express');
const app = express();

const customersController = require('./customers_controller');
const router = express.Router();

router.get('/customers/',customersController.getAllCustomers);

module.exports = router;