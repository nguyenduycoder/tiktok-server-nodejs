var uploadData = require('../models/upload.model')

exports.getData = function (req, res) {
    uploadData.get_all_data(req, function (data) {
        res.send({ result: data })
    }
    )
}
exports.uploaddetails = function (req, res) {
    uploadData.getbyId(req.params.id, function (data) {
        res.send({ result: data })
    })
}
exports.uploadData = function (req, res) {
    var data = req.body
    uploadData.upload(data, function (data) {
        res.send({ result: data })
    })
}
exports.updateData = function (req, res) {
    var data = req.body
    uploadData.update(data, function (data) {
        res.send({ result: data })
    })
}
exports.deleteData = function (req, res) {
    var id = req.params.id
    uploadData.delete(id, function (data) {
        res.send({ result: data })
    })
}
