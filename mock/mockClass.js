const Mock = require('mockjs');
const result = Mock.mock({
    "dates|16":[{
        "id|+1":1,
        "name":"生信 @id 班",
        "openDate":"@date"
    }]
}).dates;
// console.log(result);
const Class = require("../models/Class");
Class.bulkCreate(result); //向数据库中导入多条数据