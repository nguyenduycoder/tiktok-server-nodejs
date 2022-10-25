var express = require('express')
var router = express.Router()

var uploadController = require('../controllers/upload.controller')

router.get("/getallvideo", uploadController.getData)
router.post("/video", uploadController.uploadData)
router.delete("/delete/:id", uploadController.deleteData)


module.exports = router