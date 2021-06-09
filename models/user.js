const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    name: { type: String, default: 'noname' },
    surname: { type: String, default: 'nosurname' },
    email: { type: String, required: true },
    password: { type: String, required: true },
    awatar: { type: String}
}) 

const User = model('User', UserSchema)

module.exports = User