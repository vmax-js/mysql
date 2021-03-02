// 设置模型关系 

const Student = require('./Student.js');
const Class = require('./Class.js');

Class.hasMany(Student);

Student.belongsTo(Class);