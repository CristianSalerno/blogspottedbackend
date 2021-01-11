const mongoose = require('mongoose');
const Scheema = mongoose.Schema;

const postSchema = new Scheema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    postContent: {
        type: String,
        required: true,
        trim: true,
    },
    postImg:{
        type:String,
        required: true,
        trim: true,
    }

}, {
    timestamps: true
});

module.exports = postSchema;