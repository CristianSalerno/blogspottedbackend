const Post = require('./post.dao');

exports.createPost = (req, res, next) => {

    const newPost = {
        title: req.body.title,
        postContent: req.body.postContent,
    }

    Post.createPost(newPost, (err, user) => {
        console.log(newPost)
        const dataPost = {
            title: user.title,
            postContent: user.postContent,
        }
        //Response  
        res.send({ dataPost });
    })
}