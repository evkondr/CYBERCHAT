const Messages = require('../models/messages')
const Users = require('../models/user')
const moment = require('moment')

const getChat = async (req, res) => {
    try{
        const messages = await Messages.find({});
        return res.status(200).json({messages})
    }catch(e){
        return res.status(500).json({message: 'something went wrong', error: e.message})
    }
}

const addMessages = async (req, res) => {
    try{
        const {userID, text} = req.body
        const {name, surname} = await Users.findById(userID, 'name surname').exec();
        const date = `${moment().format('L')} ${moment().format('LT')}`;
        const author = `${name} ${surname}`
        await Messages.create({author, text, date});
        return res.status(200).json({message: 'message saved to chat'})

    }catch(e){
        return res.status(500).json({message: 'something went wrong', error: e.message})
    }
}
const deleteMessage = async (req, res) => {
    try {
        const {messageID} = req.body
        await Messages.findByIdAndRemove(messageID)
        return res.status(200).json({message: 'message deleted'})
    } catch (e) {
        return res.status(500).json({message: 'something went wrong', error: e.message})
    }
}

module.exports = {
    getChat,
    addMessages,
    deleteMessage
}