var express = require('express')
var router = express.Router()

var userController = require('../controllers/user.controller')

router.get("/user", userController.user)
router.get("/user/search", userController.usersearch)
router.get("/user/details/:id", userController.userdetails)
router.post("/user/create", userController.usercreate)
router.post("/user/update", userController.userupdate)
router.delete("/user/:id", userController.userdelete)

module.exports = router