const Student = require("../models/Student");
const {Op} = require('sequelize');
const Class = require('../models/Class');
exports.addClass = async function (studentObj) {
    const ins = await Student.create(studentObj);
    return ins.toJSON();
}

exports.deleteClass = async function (studentId) {
    const result = await Student.destroy({
        where: {
            id: studentId
        }
    });
    return result;
}

exports.updateClass = async function (id, studentObj) {
    const result = await Student.update(studentObj, {
        where: {
            id
        }
    });
    return result;
}

exports.findAll = async function () {
    // 查询所有学生
    const results = await Student.findAll();
    return results;
}

exports.getStudents = async function (page = 1, limit = 10,sex=-1,name) {
    // // 分页查询
    // const result = await Student.findAll({
    //     where: {
    //         offset: (page - 1) * limit,
    //         limit: +limit
    //     }
    // })
    // // 学生总数
    // const total = await Student.count();
    // // 查询结果
    // const datas = JSON.parse(JSON.stringify(result));
    // return {
    //     total,
    //     datas
    // }

    // const result = await Student.findAndCountAll({
    //     offset: (page - 1) * limit,
    //     limit: +limit
    // });
    // return {
    //     total: result.count,
    //     datas:JSON.parse(JSON.stringify(result.rows)),
    // }

    // const result = await Student.findAndCountAll({
    //     // 按照性别来查询
    //     where:{
    //         sex
    //     },
    //     offset: (page - 1) * limit,
    //     limit: +limit
    // });
    // return {
    //     total: result.count,
    //     datas:JSON.parse(JSON.stringify(result.rows)),
    // }

    // const condition = {};
    // if(sex !== -1){
    //     condition.sex = !!sex;
    // }
    // if(name){
    //     condition.name = name;
    // }
    // const result = await Student.findAndCountAll({
        
    //     where:condition,
    //     offset: (page - 1) * limit,
    //     limit: +limit
    // });
    // return {
    //     total: result.count,
    //     datas:JSON.parse(JSON.stringify(result.rows)),
    // }
    
    const condition = {};
    if(sex !== -1){
        condition.sex = !!sex;
    }
    if(name){
        // condition.name = name;
        condition.name = {
            [Op.like]:`%${name}%`
        }
    }
    const result = await Student.findAndCountAll({
        // 查指定的列
        attributes:['id','name','birthday'],
        where:condition,
        include: [Class],
        offset: (page - 1) * limit,
        limit: +limit,
        // 关联表格查询
        
    });
    return {
        total: result.count,
        datas:JSON.parse(JSON.stringify(result.rows)),
    }
    
}