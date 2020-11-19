const sequelize = require('./db');
const {
    DataTypes
} = require('sequelize');

// 定义模型 返回一个模型对象
const Admin = sequelize.define("Admin", {
    loginId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // freezeTableName: true, // 表名和模型名一致，默认为false，表名变为复数
    // tableName: 'admins',// 自己设置表名
    createdAt: false,
    updatedAt: false,
    paranoid: true, //不会真正删除，添加一列delectAt存储删除信息
});
module.exports = Admin;