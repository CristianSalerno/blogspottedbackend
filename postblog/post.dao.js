const mongoose = require('mongoose');
const authSchema = require('./post.model');

authSchema.statics = {
    createPost: function (data, cb) {
        const post = new this(data);
        post.save(cb);
    },
    findPost: function (data, cb) {
        this.find(query, cb)
    }
};

const postModel = mongoose.model('Posts', authSchema);
module.exports = postModel;