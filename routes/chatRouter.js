const router = require('express').Router()

const {getChat, addMessages} = require('../controllers/chatController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/chat',  getChat)
router.post('/chat',  addMessages)

module.exports = router