const BlogPost = require('../models/BlogPost');

const getBlogPosts = async (req, res) => {
    const posts = await BlogPost.find({});
    res.json(posts);
};

const getBlogPostById = async (req, res) => {
    const post = await BlogPost.findById(req.params.id);
    if (post) res.json(post);
    else res.status(404).json({ message: 'Post not found' });
};

const createBlogPost = async (req, res) => {
    const post = await BlogPost.create(req.body);
    res.status(201).json(post);
};

const updateBlogPost = async (req, res) => {
    const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (post) res.json(post);
    else res.status(404).json({ message: 'Post not found' });
};

const deleteBlogPost = async (req, res) => {
    const post = await BlogPost.findById(req.params.id);
    if (post) {
        await post.deleteOne();
        res.json({ message: 'Post removed' });
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};

module.exports = { getBlogPosts, getBlogPostById, createBlogPost, updateBlogPost, deleteBlogPost };
