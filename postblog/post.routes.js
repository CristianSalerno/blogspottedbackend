const Posts = require('./post.controller');
module.exports = (router) => {
    router.post('/newPost', Posts.createPost);
}