const User = require('../models/user'
)
const updateUser = async (req, res) => {
    try{
        const { userID, updates } = req.body
        await User.findByIdAndUpdate(userID, updates)
        return res.status(200).json({message: 'user updated'}) 
    }catch(e){
        return res.status(500).json({message: 'something went wrong', error: e.message})
    }
}
const getUsers = async (req, res) => {
    try{
        const users = await User.find({})
        return res.status(200).json({users}) 
    }catch(e){
        return res.status(500).json({message: 'something went wrong', error: e.message})
    }
}
module.exports = {
    updateUser,
    getUsers
}