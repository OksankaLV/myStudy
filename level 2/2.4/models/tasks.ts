import session from 'express-session'
import { Schema, model } from 'mongoose'
const Tasks = new Schema({
    login: { type: String  || undefined},
    id: {type: Number},
    text: { type: String },
    checked: { type: Boolean, unique: false},
})

module.exports = model('Tasks', Tasks)