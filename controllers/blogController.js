
const { BlogPost, Comment } = require('../models/blog');

const postBlogData = async (req, res, next) => {
    const { title, author, content } = req.body;

    try {
        const newBlogData = await BlogPost.create({
            title,
            author,
            content
        });
        res.status(200).json({data:newBlogData.dataValues});
        console.log("Blog Post Created");
        // console.log("The blog data" , newBlogData.dataValues);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
};

const getAllBlogData = async (req, res, next) => {
    
    try {
        const blogs = await BlogPost.findAll();
        res.status(200).json({ response: blogs });
        
    }
    catch (err) {
        console.error(err);
        next(err);
    }
};

const deleteCommentById = async (req, res, next) => {

    const { id } = req.params;

    try {
      Comment.findByPk(id)
    .then(comment => {
      return comment.destroy();
    })
    .then(result => {
      console.log('DESTROYED PRODUCT');
        res.status(200).json({ success: true });
    })
    }  
    catch (err) {
        console.log(err);
    }
};


module.exports = { postBlogData, getAllBlogData, deleteCommentById };
