const router = require('express').Router()
const multer = require('../middleware/multer')


const {uploadAvatar, upload} = require('../controllers/uploadController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/avatar', authMiddleware, multer.single('file'), uploadAvatar)


module.exports = router