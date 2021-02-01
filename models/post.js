const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    pTitle: {
        type: String
    },
    pTools: {
        type: String
    },
    pDesc: {
        type: String
    },
    pLink: {
        type: String
    },
    pImg: {
        type:String
    },
    pLikes: {
        type: Number,
        default: 0
    },
    pCode: {
        type: String
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;