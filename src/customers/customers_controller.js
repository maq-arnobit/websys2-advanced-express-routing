const customers = require('./customers');

function getAllCustomers(req, res) {
    let result = customers;
    if (req.query.gender) {
        result = result.filter((customer) => req.query.gender.toLowerCase() === customer.gender.toLowerCase());
    }
    if (req.query.age) {
        result = result.filter((customer) => {
            let today = new Date();
            let bday = new Date(customer.birthday);
            let datediff = today - bday;
            let age = parseInt(datediff / 31_556_952_000);
            return Number(req.query.age) === age;
        });
    }
    if (req.query.startDate) {
        result = result.filter((customer) => customer.createdAt >= req.query.startDate);
    }
    if (req.query.endDate) {
        result = result.filter((customer) => customer.createdAt <= req.query.endDate);
    }
    res.send(result);
}

module.exports = {
    getAllCustomers
}