const router = require('express').Router()
const { check } = require('express-validator');

const authController = require('../controllers/authController')
//LOGIN CONTROLLER
router.post('/login', 
check('email').isEmail().withMessage('Incorrect email syntax'), 
check('password').isLength({min: 5}).withMessage('Password must contain at least 5 characters'), 
authController.login)
//REFISTER CONTROLLER
router.post('/register', 
check('email').isEmail().withMessage('Incorrect email syntax'), 
check('password').isLength({min: 5}).withMessage('Password must contain at least 5 characters'),
check('name').isLength({min: 1}).withMessage('Name is required'),
check('surname').isLength({min: 1}).withMessage('Surname is required'),   
authController.register)

module.exports = router