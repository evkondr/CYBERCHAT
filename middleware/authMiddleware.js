const jwt = require('jsonwebtoken')

const {jwtKey} = require('../config')

const authMiddleware = async (req ,res, next) => {
    try{
        // Take token without Bearer
        const token = req.headers.authorization.split(" ")[1]
        if(!token){
            return res.status(401).json({'message': "Not authorized"})
        }
        const decoded = await jwt.verify(token, jwtKey)
        req.user = decoded
    }catch(e){
        return res.status(401).json({'message': "Not authorized"})
    }
    next()
}

module.exports = authMiddleware