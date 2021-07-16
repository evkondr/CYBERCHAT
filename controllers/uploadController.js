const Users = require('../models/user')

const uploadAvatar = async (req, res) => {
    try{
        const { userID } = req.body
        console.log(userID)
        let filedata = req.file;
        if(!filedata){
            return res.status(401).json({message: 'file shuold be jpeg, jpg or png'})
        }
        await Users.findByIdAndUpdate(userID, {avatar: filedata.path})
        return res.status(200).json({message: 'file uploaded', path: filedata.path})
    }catch(err){
        res.status(500).json({message: 'spomething went wrong', err})
    }
}
module.exports = {
    uploadAvatar
}