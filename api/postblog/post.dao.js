const mongoose = require('mongoose');
const postSchema = require('./post.model');

postSchema.statics = {

    createPost: function (data, cb) {
        const post = new this(data);
        post.save(cb);
    },

     findAllPost:  function (query, cb) {
        this.find(query, cb)
    } ,

    findPostById:  function (id, cb) {
        this.findById(id, cb)
    } 
};

const postModel = mongoose.model('Posts', postSchema);
module.exports = postModel;