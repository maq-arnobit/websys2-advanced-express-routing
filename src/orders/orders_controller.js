const orders = require('./orders');

function getAllOrders(req, res) {
    let result = orders;
    if (req.query.status) {
        result = result.filter((order) => req.query.status.toLowerCase() === order.status.toLowerCase());
    }
    if (req.query.startAmt) {
        result = result.filter((order) => order.totalAmount >= req.query.startAmt);
    }
    if (req.query.endAmt) {
        result = result.filter((order) => order.totalAmount <= req.query.endAmt);
    }
    res.send(result);
}

module.exports = {
    getAllOrders
}