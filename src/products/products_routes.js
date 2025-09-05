const express = require('express');
const app = express();

const productsController = require('./products_controller');
const router = express.Router();

router.get('/products/',productsController.getAllProducts);

module.exports = router;