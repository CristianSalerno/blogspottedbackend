const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: 'number',
    username: 'string',
    email: 'string',
    password: 'string',
    isActive: Boolean
});

module.exports = userSchema;