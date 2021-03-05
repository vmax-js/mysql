const {
    Sequelize
} = require('sequelize');
const {sqlLogger} = require('../logger')
const sequelize = new Sequelize('myschooldb', 'root', 'tan501924?', {
    host: 'localhost',
    dialect: 'mysql', //数据库的类型
    // logging: null,//关闭日志信息
    logging: (msg)=>{
        sqlLogger.debug(msg);
    },

});
module.exports = sequelize;

//模型关系
/*
    
*/