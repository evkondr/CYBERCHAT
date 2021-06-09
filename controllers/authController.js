const bcrypt = require('bcryptjs');
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const {jwtKey} = require('../config')

// LOGIN WITH USER CREDENTIALS
const login = async (req, res) => {
    const {email, password} = req.body
    try{
        const user = await User.findOne({email}).exec()
        console.log(user)
        if(!user.length==0){
            return res.status(400).json({message: 'wrong password or email'})
        }
        const result = await bcrypt.compare(password, user.password)
        
        if(!result){
            return res.status(400).json({message: 'wrong password or email'})
        }
        const token = jwt.sign({
            id: user._id,
            email: user.email
        }, jwtKey, {expiresIn: '1h'})

        return res.status(200).json({token})
    }catch(e){
        res.status(500).json({message: 'something went wrong', error: e})
    }
}

// REGISTER A NEW USER
const register = async (req, res) => {
    const {name, surname, email, awatar} = req.body
    try{
        const user = await User.find({email})
        if(user){
            return res.status(403).json({message: 'user with this email already exists'})
        }
        const salt = await bcrypt.genSaltSync(10);
        const password = await bcrypt.hashSync(req.body.password, salt);
        await User.create({name, surname, email, password, awatar})
    }catch(e){
        res.status(500).json({message: 'something went wrong', error: e})
    }
    return res.status(200).json({message: 'user registred successfully'})
}

module.exports ={
    register,
    login
}