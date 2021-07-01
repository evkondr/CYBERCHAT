const {Schema, model} = require('mongoose')

const MessagesSchema = new Schema({
    author: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: String, required: true }
}) 

const Messages = model('Messages', MessagesSchema)

module.exports = Messages 