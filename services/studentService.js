const Student = require("../models/Student");
const {
    Op
} = require('sequelize');
const Class = require('../models/Class');
const validate = require('validate.js');
const moment = require('moment');
const { pick } = require('../util/propertyHelper');
exports.addClass = async function (studentObj) {
    //对于studentObj中不需要的属性进行剔除 筛选我们需要的
    studentObj = pick(studentObj,'name','sex','mobile','birthday','classId');
    // console.log(s);
    /**
     * 自定义验证规则 判断班级id是否存在 
     * 验证通过 返回undefind
     */
    validate.validators.classIdExit = async function (value) {
        const result = await Class.findByPk(value);
        if (result) {
            return;
        }
        return 'is not exit';
    }
    // 验证规则
    const rule = {
        name: {
            presence: {
                allowEmpty: false
            },
            type: "string",
            length: {
                minimum: 1,
                maximum: 10
            }

        },
        birthday: {
            presence: {
                allowEmpty: false,
            },
            datetime: {
                dateOnly: true,
                earliest: moment.utc().subtract(100, 'y'),
                latest: moment.utc().subtract(5, 'y')
            }
        },
        sex: {
            presence: true,
            type: 'boolean'
        },
        mobile: {
            presence: {
                allowEmpty: false
            },
            format: /1\d{10}/
        },
        classId: {
            presence: {
                allowEmpty: false,
            },
            numericality: {
                onlyInteger: true,
                strict: false
            },
            classIdExit: true
        }
    }
    // 同步验证
    // const result = validate.validate(studentObj,rule);
    // console.log(result);

    // 涉及数据库数据查询 异步验证
    try {
        await validate.async(studentObj, rule);
    } catch (err) {
        console.log(err);
    }
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

exports.getStudents = async function (page = 1, limit = 10, sex = -1, name) {
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
    if (sex !== -1) {
        condition.sex = !!sex;
    }
    if (name) {
        // condition.name = name;
        condition.name = {
            [Op.like]: `%${name}%`
        }
    }
    const result = await Student.findAndCountAll({
        // 查指定的列
        attributes: ['id', 'name', 'birthday','age'],
        where: condition,
        include: [Class],
        offset: (page - 1) * limit,
        limit: +limit,
        // 关联表格查询

    });
    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows)),
    }

}