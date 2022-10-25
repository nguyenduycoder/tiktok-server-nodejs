var login = require('../models/login.model')

exports.createQR = function (req, res) {
    // var query = req.query
    login.createQR(function (data) {
        res.send({ token: data })
    })
}
exports.deleteQR = function (req, res) {
    var id = req.params.id
    login.delete(id, function (data) {
        res.send({ result: data })
    })
}
exports.checkTokenQR = function (req, res) {
    // var query = req.query
    var data = req.body
    login.checkTokenQR(data, function (data) {
        res.send({ result: data })
    })
}
exports.activeloginQR = function (req, res) {
    // var query = req.query
    var data = req.body
    login.activeloginQR(data, function (data) {
        res.send({ result: data })
    })
}