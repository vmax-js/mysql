const sequelize = require('./db');
const {
    DataTypes
} = require('sequelize');
const Book = sequelize.define('Book', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imgUrl: {
        type: DataTypes.STRING, // 图片路径
        allowNull: true
    },
    publishDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: true,
    updatedAt: true,
    paranoid: true
});
module.exports = Book;