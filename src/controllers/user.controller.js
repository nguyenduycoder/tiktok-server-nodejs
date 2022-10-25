var userData = require('../models/user.model')

exports.user = function (req, res) {
    var query = req.query
    userData.get_all_data(req.params, function (data) {
        var datafilter = data.sort(function (a, b) { return b.followers_count - a.followers_count });
        if (query.type === 'less') { datafilter = datafilter.slice(0, 5) }
        else if ((query.type === 'large')) (datafilter = datafilter.slice(0, 31))
        res.send({ result: datafilter })
    })
}
exports.usersearch = function (req, res) {
    var query = req.query
    userData.get_all_data(req.params, function (data) {
        let objectwhere = new RegExp(query.q, 'i')
        var datalast = data.filter(res => (res.nickname.search(objectwhere) >= 0 || res.full_name.search(objectwhere) >= 0))
        if (query.q) {
            var datafilter = datalast.sort(function (a, b) { return b.followers_count - a.followers_count });
            if (query.type === 'less') datafilter = datalast.slice(0, 5)
            res.send({ result: datafilter })
        }
        else {
            res.send({
                "message": "The given data was invalid.",
                "errors": {
                    "q": [
                        "The q field is required."
                    ]
                },
                "status_code": 422
            })
        }

    })
}
exports.userdetails = function (req, res) {
    userData.getbyId(req.params.id, function (data) {
        res.send({ result: data })
    })
}
exports.usercreate = function (req, res) {
    var data = req.body
    userData.create(data, function (data) {
        res.send({ result: data })
    })
}
exports.userupdate = function (req, res) {
    var data = req.body
    userData.update(data, function (data) {
        res.send({ result: data })
    })
}
exports.userdelete = function (req, res) {
    var id = req.params.id
    userData.delete(id, function (data) {
        res.send({ result: data })
    })
}