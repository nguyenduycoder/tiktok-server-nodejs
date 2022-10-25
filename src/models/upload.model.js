var db = require('../common/connectDB')

const Upload = function (upload) {
    this.id = upload.id
    this.iduser = upload.iduser
    this.title = upload.title
    this.likes = upload.likes
    this.comments = upload.comments
    this.shares = upload.shares
    this.htag = upload.htag
    this.src = upload.src


}

Upload.get_all_data = function (params, result) {
    db.query('SELECT * FROM Uploadvideo', function (err, upload) {
        if (err) {
            console.log(err)
        }
        else result(upload)
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
    // db.query(
    //     'UPDATE Users SET first_name=?,last_name=?,full_name=?,nickname=?,avatar=?,bio=?,tick=?,followings_count=?,followers_count=?,likes_count=?,website_url=?,facebook_url=?,youtube_url=?,twitter_url=?,instagram_url=?,created_at=?,updated_at=?  WHERE id = ?'
    //     ,
    //     [data.first_name, data.last_name, data.full_name, data.nickname, data.avatar, data.bio, data.tick, data.followings_count, data.followers_count, data.likes_count, data.website_url, data.facebook_url, data.youtube_url, data.twitter_url, data.instagram_url, data.created_at, data.updated_at, data.id]
    //     , function (err, user) {
    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             result(`Đã update dữ liệu của user ${data.id} thành công`)
    //         }
    //     })
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