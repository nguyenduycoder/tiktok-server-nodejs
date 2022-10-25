var db = require('../common/connectDB')
const User = function (user) {
    this.id = user.id
    this.first_name = user.first_name
    this.last_name = user.last_name
    this.full_name = user.full_name
    this.nickname = user.nickname
    this.avatar = user.avatar
    this.bio = user.bio
    this.tick = user.tick
    this.followings_count = user.followings_count
    this.followers_count = user.followers_count
    this.likes_count = user.likes_count
    this.website_url = user.website_url
    this.facebook_url = user.facebook_url
    this.youtube_url = user.youtube_url
    this.twitter_url = user.twitter_url
    this.instagram_url = user.instagram_url
    this.created_at = user.created_at
    this.updated_at = user.updated_at
}
User.get_all_data = function (params, result) {
    db.query('SELECT * FROM Users', function (err, user) {
        if (err) {
            console.log(err)
        }
        else result(user)
    })
}
User.getbyId = function (id, result) {
    db.query('SELECT * FROM Users WHERE id=?', id, function (err, user) {
        if (err) {
            console.log(err)
        }
        else result(user[0])
    })
}
User.create = function (data, result) {
    db.query('INSERT INTO Users SET ?', data, function (err, user) {
        if (err) {
            console.log(err)
        }
        else result({ id: user.insertId, ...data })
    })
}
User.update = function (data, result) {
    db.query(
        'UPDATE Users SET first_name=?,last_name=?,full_name=?,nickname=?,avatar=?,bio=?,tick=?,followings_count=?,followers_count=?,likes_count=?,website_url=?,facebook_url=?,youtube_url=?,twitter_url=?,instagram_url=?,created_at=?,updated_at=?  WHERE id = ?'
        ,
        [data.first_name, data.last_name, data.full_name, data.nickname, data.avatar, data.bio, data.tick, data.followings_count, data.followers_count, data.likes_count, data.website_url, data.facebook_url, data.youtube_url, data.twitter_url, data.instagram_url, data.created_at, data.updated_at, data.id]
        , function (err, user) {
            if (err) {
                console.log(err)
            }
            else {
                result(`Đã update dữ liệu của user ${data.id} thành công`)
            }
        })
}
User.delete = function (id, result) {
    db.query(
        'DELETE FROM Users WHERE id = ?', id, function (err, user) {
            if (err) {
                console.log(err)
            }
            else {
                result(`Đã xoá user có id là ${id} thành công`)
            }
        })
}




module.exports = User