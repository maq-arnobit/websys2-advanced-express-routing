const products = require('./products');

function getAllProducts(req, res) {
    let result = products;
    if (req.query.name) {
        result = result.filter((product) => product.name.toLowerCase().includes(req.query.name.toLowerCase()));
    }
    if (req.query.desc) {
        result = result.filter((product) => product.description.toLowerCase().includes(req.query.desc.toLowerCase()));
    }
    if (req.query.startPrice && req.query.endPrice) {
        result = result.filter((product) => product.price >= req.query.startPrice);
    }
    if (req.query.endPrice) {
        result = result.filter((product) => product.price <= req.query.endPrice);
    }
    if (req.query.startStock && req.query.endStock) {
        result = result.filter((product) => product.stock >= req.query.startStock);
    }
    if (req.query.endStock) {
        result = result.filter((product) => product.stock <= req.query.endStock);
    }
    res.send(result);
}

module.exports = {
    getAllProducts
}