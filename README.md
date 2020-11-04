## mysql驱动程序
### 什么是驱动程序
  - 驱动程序是连接内存和其他存储介质的桥梁
  - mysql驱动程序是连接内存数据和mysql数据的桥梁
  - mysql的驱动程序通常使用： mysql和mysql2 

### 安装
  - npm i mysql2
### 使用

#### 导入mysql2
```js
const mysql = require('mysql2');
```

#### 创建一个数据库连接
```js
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tan501924?',
    database: 'companydb', //数据库名称
});
```
#### 操作数据库
  - 查询
```js
connection.query(
    // mysql语句
    'select * from `company`;',
    /**
     * 
     * @param {*} error 错误
     * @param {*} results 查询结果，返回一个数据，每一项为一个对象
     * @param {*} fields 原数据
     */
    function(error,results,fields){
        console.log(results); // 查询结果
        // console.log(fields); 原数据一般用不到
    }
);
```
  - 添加数据
```js
connection.query(
    "insert into company(`name`,location,buildDate) values('tan科技','重庆',curdate());",
    (err, results) => {
        console.log(results);
        /*
            ResultSetHeader {
                fieldCount: 0,
                affectedRows: 1,  //影响的行数
                insertId: 4, // 新增的主键id
                info: '',
                serverStatus: 2,
                warningStatus: 0
            }
        */
    }
)
```
  - 修改数据
```js
connection.query(
    "update company set `name` = 'TSCN' where id = 4;",
    (err,results)=>{
        console.log(results);
    }
    /*
        ResultSetHeader {
            fieldCount: 0,
            affectedRows: 1,
            insertId: 0,
            info: 'Rows matched: 1  Changed: 1  Warnings: 0',
            serverStatus: 2,
            warningStatus: 0,
            changedRows: 1
        }
    */
)
```
 - 删除
```js
connection.query(
    "delete from company where id=4;",
    (err,res)=>{
        console.log(res);
    }
    /*
            ResultSetHeader {
                fieldCount: 0,
                affectedRows: 1,
                insertId: 0,
                info: '',
                serverStatus: 2,
                warningStatus: 0
            }
    */
)
```
#### 关闭连接
```js
connection.end();
```
### mysql/promise
- 导入mysql2/promise
- 异步操作
```js
const mysql = require('mysql2/promise');
async function test(){

    const connection = await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'tan501924?',
        database:'companydb'
    });
    const [results] = await connection.query('select * from company;');
    console.log(results);
    connection.end();
}
test();
```
### 防止sql注入
sql注入：用户通过sql语句到最终查询中，导致了整个sql与预期行为不符合
- 例子
```js
const mysql = require('mysql2/promise');
async function test(id){
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'tan501924?',
        database: 'companydb',
        multipleStatements: true //运行多条sql语句默认为false
    });
    const sql = `select * from company where id=${id}`;
    const [results] = await connection.query(sql);
    console.log(results);
    connection.end();
}
test(`'';insert into company(\`name\`,location,buildDate) values('t','dd',curdate());`); // 最终导致在数据库中添加了一条数据

```
#### 解决
使用sql变量，sql预编译，将query改为execute
```js
const mysql = require('mysql2/promise');
async function test(id){
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'tan501924?',
        database: 'companydb',
        multipleStatements: true //运行多条sql语句默认为false
    });
    const sql = `select * from company where id=?`; // ?为变量
    // const sql = `select * from employee where \`name\` like concat('%',?,'%');`;
    const [results] = await connection.execute(sql,[id]);//数组中依次为变量
    console.log(results);
    connection.end();
}
test(`'';insert into company(\`name\`,location,buildDate) values('t','dd',curdate());`); // 最终导致在数据库中添加了一条数据

```

### 连接池
```js
const mysql = require('mysql/promise');
const pool = mysql.createPool({
    host:"localhost",
    user:'root',
    password:'tan501924?',
    database:'companydb',
    mutipleStatement:true,
    waitForConnection:true,
    connectionLimit:10
})
async function test(id){
    const sql = `select * from company where id = ?;`;
    const [results] = await pool.execute(sql,id);
}
```