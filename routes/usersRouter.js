const router = require('express').Router()
const { updateUser, getUsers } = require('../controllers/usersController')

router.patch('/user/update', updateUser)
router.get('/', getUsers)

module.exports = router