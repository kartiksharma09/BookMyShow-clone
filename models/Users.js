const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Users = mongoose.model('user', UserSchema);
module.exports = Users;