
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name_or_email: String,
    password: String,
    confirmPassword: String,
})


exports.User= mongoose.model('User', userSchema);
