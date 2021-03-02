const Mock = require("mockjs");
const Student = require('../models/Student.js');
const result = Mock.mock({
    "dates|500-700":[{
        "name":"@cname",
        "birthday":"@date",
        "sex|1-2":true,
        "mobile":/^1[3456789]\d{9}$/,
        "ClassId|1-16":0
    }]
}).dates;
// console.log(result);
Student.bulkCreate(result);