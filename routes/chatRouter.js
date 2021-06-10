const router = require('express').Router()

const {getChat} = require('../controllers/chatController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/chat', authMiddleware, getChat)

module.exports = router