var express = require('express')
var router = express.Router()

var loginController = require('../controllers/login.controller')

router.get("/createQR", loginController.createQR)
router.post("/checkTokenQR", loginController.checkTokenQR)
router.post("/activeloginQR", loginController.activeloginQR)


module.exports = router