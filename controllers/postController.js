const Post = require("../models/Post");


exports.createPost = async(req,res)=>{
    try {
        const {title,content}=req.body;
        const post = await Post.create({
            title,
            content,
            author:req.user.id
        })
        res.status(201).json(post)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

exports.getPost = async(req,res)=>{
    try {
        const post = await Post.find().populate("author","name email");

        res.json(post)

    } catch (error) {
          res.status(500).json({msg:error.message})
    }
}

exports.updatePost = async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({msg:"post not found"})
        }
        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;
        await post.save();
        res.json(post)
    } catch (error) {
          res.status(500).json({msg:error.message})
    }
}

exports.deletePost = async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id)
        if(!post){
            return res.status(404).json({msg:"Post not found"})

        }
        await post.deleteOne()
        res.json({msg:"Post deleted"})
    } catch (error) {
          res.status(500).json({msg:error.message})
    }
}