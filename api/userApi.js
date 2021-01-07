const mongoose = require('mongoose');
const userModel = require('../models/userModel');

const User = mongoose.model('User', userModel.userSchema);

const newUser = new User({
    id: '1',
    username: 'user',
    email: 'email@email.com',
    password: 'password',
    isActive: true
})

newUser.save(function (err) {
    if (err) return handleError(err);
    // saved!
});


module.exports = newUser;