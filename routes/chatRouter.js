const router = require('express').Router()

const {getChat, addMessages, deleteMessage} = require('../controllers/chatController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/chat', authMiddleware, getChat)
// router.post('/chat/add', addMessages)
router.delete('/chat/delete', authMiddleware, deleteMessage)

module.exports = router