const mongoose = require('mongoose');
const postSchema = require('./post.model');

postSchema.statics = {
    createPost: function (data, cb) {
        const post = new this(data);
        post.save(cb);
    },
     findPost:  function (query, cb) {
        this.find(query, cb)
    } 
};

const postModel = mongoose.model('Posts', postSchema);
module.exports = postModel;