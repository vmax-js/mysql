const Student = require("../models/Student");

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