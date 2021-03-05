// const sequelize = require('./models/db');
// (async function(){
//     try{
//         await sequelize.authenticate();
//         console.log('successfully');
//     }catch(error){
//         console.error('Unable to connect to the database',error);
//     }
// })();

// require('./models/sync');

// 增加
// const Admin = require("./models/Admin");
// const ins = Admin.build({
//     loginId: "abc",
//     loginPwd: "123",
//     name:"tan"
// });  //同步方法，构建一个模型实例
// ins.loginId = "abc1";
// ins.save().then(()=>{
//     console.log('构建成功!');
// })

// const Admin = require("./models/Admin");

// Admin.create({
//     loginId: "771835525",
//     loginPwd: "tan924?",
//     name:"XGives"
// }).then(ins=>{
//     console.log('新建成功管理员！',ins);
// });
// ins实例
/*
Admin {
  dataValues: { id: 4, loginId: '771835525', loginPwd: 'tan924?', name: 'XGives' },
  _previousDataValues: {
    loginId: '771835525',
    loginPwd: 'tan924?',
    name: 'XGives',
    id: 4,
    deletedAt: undefined
  },
  _changed: Set {},
  _options: {
    isNewRecord: true,
    _schema: null,
    _schemaDelimiter: '',
    attributes: undefined,
    include: undefined,
    raw: undefined,
    silent: undefined
  },
  isNewRecord: false
}
*/


// const adminServ = require('./services/adminService');

// const a = adminServ.addAdmin({
//     loginId: "tanbiao",
//     loginPwd: "12333",
//     name:"bi"
// });

// console.log(a);

// require('./models/relation');
// require('./mock/mockStudent');

// 查询测试 不区分大小写 可操作mysql改动某一列是否区分大小写 推荐js来判断
// const adminServ = require('./services/adminService');

// adminServ.login('abc1','123').then(res=>{
//   console.log(res);
// })

// 根据主键来查询
// adminServ.getAdminById(1).then(r=>{
//   console.log(r);
// })

// const stuServ = require('./services/studentService');

// stuServ.getStudents(1,10,1,'强').then((res)=>{
//   console.log(res);
// })

// const classServ = require('./services/classService');
// classServ.findAll().then(res=>{
//   console.log(res);
// })


// const md5 = require('md5');

// const res = md5('');
// console.log(res);

// const adminServ = require('./services/adminService');

// adminServ.addAdmin({
//   loginId:'tanbiao',
//   loginPwd:"tan501924?",
//   name:'tan110'
// }).then(res=>{
//   console.log(res);
// })

// adminServ.login('tanbiao','tan501924?').then(res=>{
//   console.log(res);
// })


require('./init');