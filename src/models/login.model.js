var db = require('../common/connectDB')
var jwt = require('jsonwebtoken');
const Login = function (auth) {
    // username: 'trungquandev',
    // password: 'trungquandev',
    // is2FAEnabled: true,
    // secret: generateUniqueSecret()

    this.username = auth.username
    this.password = auth.password
    this.is2FAEnabled = auth.is2FAEnabled
    this.secret = auth.secret

}
Login.createQR = async function (result) {
    var token = jwt.sign({ secret: 8 }, 'tiktok', { expiresIn: 60 });
    try {
        var data = {
            "id": `${token}`,
            "idActive": null,
            "scan": 0
        }
        result(`${token}`)
        db.query('INSERT INTO LoginQR SET ?', data, function (err, value) {
            if (err) {
                console.log(err)
            }
            else { console.log('đã thêm vào sql') }
        })
    } catch (error) {
        result({ err: 'Could not generate QR code' })
    }
}
Login.deleteQR = async function (id, result) {
    db.query(
        'DELETE FROM LoginQR WHERE id = ?', id, function (err, user) {
            if (err) {
                console.log(err)
            }
            else {
                result(`Đã xoá user có id là ${id} thành công`)
            }
        })
}
Login.checkTokenQR = async function (data, result) {
    jwt.verify(data.token, 'tiktok', async function (err, decoded) {
        if (err) {
            result({ err })
        }
        else {
            db.query('SELECT * FROM LoginQR WHERE id=?', data.token, function (err, token) {
                if (err) {
                    console.log(err)
                }
                else result({ ...token[0], ...decoded })
            })
        }
    });
}
Login.activeloginQR = async function (data, result) {

    jwt.verify(data.token, 'tiktok', async function (err, decoded) {
        if (err) {
            result({ err })
        }
        else {
            db.query(
                'UPDATE LoginQR SET idActive=?,scan=? WHERE id = ?'
                ,
                [data.idActive, data.scan, data.token]
                , function (err, user) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        result(`Đã active Login thành công`)
                    }
                })

        }
    });
}






module.exports = Login