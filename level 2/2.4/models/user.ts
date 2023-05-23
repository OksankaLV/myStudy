import { Schema, model } from 'mongoose'
const User = new Schema({
    login: { type: String , unique: true, },
    password: { type: String },
    //tasks: [{id: String, $ref:"tasks"}]
    
})

module.exports = model('User', User)