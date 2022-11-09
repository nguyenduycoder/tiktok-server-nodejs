var express = require('express')
var router = express.Router()

var userController = require('../controllers/user.controller')

router.get("/", userController.user)
router.get("/search", userController.usersearch)
router.get("/details/:id", userController.userdetails)
router.post("/create", userController.usercreate)
router.post("/update", userController.userupdate)
router.delete("/:id", userController.userdelete)

module.exports = router