const sequelize = require('./db');
const {
    DataTypes
} = require('sequelize');
const moment = require('moment');
const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false,
        // 访问器
        get(){
              // 返回时间戳
            const birth = this.getDataValue('birthday');
            if(!birth){
                return this.getDataValue('birthday').getTime()
            }
            return undefined;
           
        }
    },
    // 虚拟字段
    age:{
        type:DataTypes.VIRTUAL,
        get(){
            const now = moment.utc();
            const birth = moment.utc(this.birthday);
            // 得到年份
            return now.diff(birth,'y');
        }
    },
    sex: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    mobile: {
        type: DataTypes.STRING(11),
        allowNull: false
    }
}, {
    createdAt: true,
    updatedAt: true,
    paranoid: true
});
module.exports = Student;