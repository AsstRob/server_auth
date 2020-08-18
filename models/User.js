// user model schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: { type: String, required: true },
    email: {type: String, required: true},
    password: {type: String, required: true},
    designation: { type: String, required: true },
    phone: { type: Number, required: true}
}, {timestamps: true}
);

const User = mongoose.model('user', userSchema);

module.exports = User;