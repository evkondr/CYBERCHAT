const {Schema, model} = require('mongoose')
const avatarURL = 'uploads/default/default-avatar.png'

const UserSchema = new Schema({
    name: { type: String, default: 'noname' },
    surname: { type: String, default: 'nosurname' },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, default: avatarURL || null}
}) 

const User = model('User', UserSchema)

module.exports = User