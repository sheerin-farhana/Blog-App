const express = require('express');
const route = express.Router();
const { postBlogData, getAllBlogData,deleteCommentById } = require('../controllers/blogController');



route.get('/getAllBlogs', getAllBlogData);

route.post('/insertBlog', postBlogData);

route.post('/deleteComment/:id', deleteCommentById);

module.exports = route;