const Post = require('./post.dao');

exports.createPost = (req, res, next) => {

    const newPost = {
        title: req.body.title,
        postContent: req.body.postContent,
        postImg: req.body.postImg,
    }

    Post.createPost(newPost, (err) => {
        if (err.code === 11000) {
            return res.status(409).send('this theme already exists.');
        }
        const dataPost = {
            title: newPost.title,
            postContent: newPost.postContent,
            postImg: newPost.postImg
        }
        //Response  
        res.send({ dataPost });
    })
}


exports.getAllPost = (req, res, next) => {

    Post.find({}, (err,post)=>{
        if (err){
            next(err)
        }
        else{
            res.send(post)
        }
    })
}