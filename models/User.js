// user model

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: { type: String },
    designation: { type: String },
    email: {type: String},
    phone: { type: Number}
}, {timestamps: true});

const User = mongoose.model('user', userSchema);

module.exports = User;