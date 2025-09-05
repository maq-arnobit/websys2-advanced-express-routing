const product_routes = require('./src/products/products_routes');
const customer_routes = require('./src/customers/customers_routes');
const order_routes = require('./src/orders/orders_routes');
const express = require('express');
const app = express();

app.use(order_routes);
app.use(customer_routes);
app.use(product_routes);

app.listen(3000, () => {
    console.log('Server has started on http://localhost:3000');
});