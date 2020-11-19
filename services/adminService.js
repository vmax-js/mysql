// 管理员初始化
// 判断数据库中是否有管理员，如果没有，自动添加一个管理员
const Admin = require("../models/Admin");
// 增加
exports.addAdmin = async function(adminObj){
    // 应该判断aadmin的各种属性是否合理，以及账号是否存在
    const ins = await Admin.create(adminObj);
    return ins.toJSON();
};
// 删除
exports.deleteAdmin = async function(adminId){
    // 1.有实例
    // const ins = await Admin.findByPk(adminId);
    // if(ins){
    //     await ins.destroy();
    // }

    // 2.不通过实例
    const result = await Admin.destroy({
        where:{
            id: adminId
        }
    });
    return result;
};
//改
exports.updateAdmin = async function(id,adminObj){

    // const ins = await Admin.findByPk(id);
    // ins.loginId = adminObj.loginId;
    // ins.save();

    const result = await Admin.update(adminObj,{
        where:{
            id,
        },
    });
    return result;
};