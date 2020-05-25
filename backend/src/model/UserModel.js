const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    type: {type: Number, required: true},
    active: {type: Number, required: true},
    name: {type: String, require: true},
    password: {type: String, require: true},
    create: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('User', UserSchema)