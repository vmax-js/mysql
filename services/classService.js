const Class = require("../models/Class");

exports.addClass = async function (classObj) {
    const ins = await Class.create(classObj);
    return ins.toJSON();
}

exports.deleteClass = async function (classId) {
    const result = await Class.destroy({
        where: {
            id: classId
        }
    });
    return result;
}

exports.updateClass = async function (id, classObj) {
    const result = await Class.update(classObj, {
        where: {
            id
        }
    });
    return result;
}