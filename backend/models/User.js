// /models/users.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    user: String,
    password: String,
})

mongoose.model('users', userSchema);