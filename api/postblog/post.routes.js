const Posts = require('./post.controller');
module.exports = (router) => {
    router.post('/newPost', Posts.createPost);
    router.get('/findPost', Posts.getAllPost);
}
