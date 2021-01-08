const mongoose = require('mongoose');
const Scheema = mongoose.Schema;

const userSchema = new Scheema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true
});

module.exports = userSchema;