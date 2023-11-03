const Sequelize = require('sequelize');
const sequelize = require('../util/database');


const BlogPost = sequelize.define('BlogPost', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
});
  
const Comment = sequelize.define('Comment', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    text: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
});
  
BlogPost.hasMany(Comment);
Comment.belongsTo(BlogPost);


module.exports = { BlogPost, Comment };