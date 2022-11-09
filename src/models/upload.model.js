var db = require('../common/connectDB')

const Upload = function (upload) {
    this.id = upload.id
    this.iduser = upload.iduser
    this.title = upload.title
    this.likes = upload.likes
    this.comments = upload.comments
    this.shares = upload.shares
    this.htag = upload.htag
    this.imagecover = upload.imagecover
    this.src = upload.src
    this.modeview = upload.modeview
    this.optcomment = upload.optcomment
    this.optduet = upload.optduet
    this.otpstitch = upload.otpstitch



}

Upload.get_all_data = function (params, result) {
    db.query('SELECT * FROM Uploadvideo', function (err, upload) {
        if (err) {
            console.log(err)
        }
        else result(upload)
    })
}
Upload.getbyId = function (id, result) {
    db.query('SELECT * FROM Uploadvideo WHERE iduser=?', id, function (err, upload) {
        if (err) {
            console.log(err)
        }
        else result(upload[0])
    })
}
Upload.upload = async function (data, result) {
    db.query('INSERT INTO Uploadvideo SET ?', data, function (err, upload) {
        if (err) {
            console.log(err)
        }
        else result({ id: upload.insertId, ...data })
    })
}
Upload.update = function (data, result) {
    db.query(
        'UPDATE Uploadvideo SET iduser=?,title=?,likes=?,shares=?,comments=?,htag=?,imagecover=?,modeview=?,optcomment=?,optduet=?,otpstitch=? WHERE id = ?'
        ,
        [data.iduser, data.title, data.likes, data.shares, data.comments, data.htag, data.imagecover, data.modeview, data.optcomment, data.optduet, data.otpstitch, data.id]
        , function (err, user) {
            if (err) {
                console.log(err)
            }
            else {
                result(`Đã update dữ liệu của upload ${data.id} thành công`)
            }
        })
}
Upload.delete = async function (id, result) {
    db.query(
        'DELETE FROM Uploadvideo WHERE id = ?', id, function (err, upload) {
            if (err) {
                console.log(err)
            }
            else {
                result(`Đã xoá upload có id là ${id} thành công`)
            }
        })
}






module.exports = Upload