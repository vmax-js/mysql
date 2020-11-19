## Sequelize

### Sequelize是一个ORM框架
- ORM Object Relational Mapping 对象关系映射
- 通过ORM框架，可以自动的把程序中的对象和数据库关联
- ORM框架会隐藏具体的数据库底层细节，让开发者使用同样的的数据操作接口，完成不同数据库的操作
- ORM的优势
  - 开发者不用关心数据库，仅关心对象
  - 可以轻易的完成数据库的移植
  - 无须拼接复杂的sql语句即可完成精确查询
### Node中的ORM
- sequelize  成熟
  - JS
  - TS
- TypeORM 不成熟
  - TS

### 模型的定义和同步
#### 入门
- 安装sequelize和mysql2
```npm i sequelize mysql2```
#### 连接到数据库
- 定义
```js
const {
    Sequelize
} = require('sequelize');

const sequelize = new Sequelize('myschooldb', 'root', 'tan501924?', {
    host: 'localhost',
    dialect: 'mysql' //数据库的类型
});
module.exports = sequelize;
```
- 连接测试
```js
const sequelize = require('./models/db.js');
(async function(){
    try{
        await sequelize.authenticate();
        console.log('successfully');
    }catch(error){
        console.error('Unable to connect to the database',error);
    }
})();
```
- 关闭连接
一般不需要我们自动关闭连接，如果要手动关闭连接```sequlize.close()```;

#### 定义模型
```js
const sequelize = require('./db');
const {
    DataTypes
} = require('sequelize');

// 定义模型 返回一个模型对象
const Admin = sequelize.define("Admin", {
    loginId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // freezeTableName: true, // 表名和模型名一致，默认为false，表名变为复数
    // tableName: 'admins',// 自己设置表名
    createdAt: false,
    updatedAt: false,
    paranoid: true, //不会真正删除，添加一列delectAt存储删除信息
});
module.exports = Admin;
```
#### 模型的增删改
- 增加
```js
// 增加 方式1
const Admin = require("./models/Admin");
const ins = Admin.build({
    loginId: "abc",
    loginPwd: "123",
    name:"tan"
});  //同步方法，构建一个模型实例
ins.loginId = "abc1";
ins.save().then(()=>{
    console.log('构建成功!');
})

// 增加 方式2
const Admin = require("./models/Admin");
Admin.create({
    loginId: "771835525",
    loginPwd: "tan924?",
    name:"XGives"
}).then(ins=>{
    console.log('新建成功管理员！',ins);
});
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
```
- 增删改
```js
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
```