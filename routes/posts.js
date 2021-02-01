const express = require('express');
const router = express.Router();
const Post = require('../models/post.js');

// Gets all posts
router.get('/', async (req, res) => {
    try {
        const projectPosts = await Post.find();
        res.json(projectPosts);
    } catch (error) {
        console.log(error);
    }
});


router.post('/', async (req, res) => {
    const post = req.body;
    const newPost = new Post(post);

    try {
        await newPost.save();
        res.json(newPost);
    } catch (error) {
        console.log(error);
    }
});

module.exports =  router;