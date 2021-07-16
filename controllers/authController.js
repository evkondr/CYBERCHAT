const bcrypt = require('bcryptjs');
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const { jwtKey } = require('../config')
const { validationResult } = require('express-validator');
// LOGIN WITH USER CREDENTIALS
const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email, password} = req.body
    try{
        const user = await User.findOne({email}).exec()
        if(!user){
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

        return res.status(200).json({token, userID: user._id})
    }catch(e){
        res.status(500).json({message: 'something went wrong', error: e.message})
    }
}

// REGISTER A NEW USER
const register = async (req, res) => {
    try{
        const {name, surname, email} = req.body
        const user = await User.find({email})
        console.log(!user.length)
        if(user.length){
            return res.status(403).json({message: 'user with this email already exists'})
        }
        const salt = await bcrypt.genSaltSync(10);
        const password = await bcrypt.hashSync(req.body.password, salt);
        const newUser = await User.create({name, surname, email, password})
        fs.mkdir(`uploads/${newUser._id}`, { recursive: true }, (err)=>{
            if (err) throw err;
        });
    }catch(e){
        return res.status(500).json({message: 'something went wrong', error: e.message})
    }
    return res.status(200).json({message: 'user registred successfully'})
}

module.exports ={
    register,
    login
}
