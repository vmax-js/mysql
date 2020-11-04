const mysql = require('mysql2');

// 创建一个数据库连接
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tan501924?',
    database: 'companydb', //数据库名称
});

// connection.query(
//     // mysql语句
//     'select * from `company`;',
//     /**
//      * 
//      * @param {*} error 错误
//      * @param {*} results 查询结果，返回一个数据，每一项为一个对象
//      * @param {*} fields 原数据
//      */
//     function(error,results,fields){
//         console.log(results); // 查询结果
//         // console.log(fields); 原数据一般用不到
//     }
// );

// connection.query(
//     "insert into company(`name`,location,buildDate) values('tan科技','重庆',curdate());",
//     (err, results) => {
//         console.log(results);
//         /*
//             ResultSetHeader {
//                 fieldCount: 0,
//                 affectedRows: 1,  //影响的行数
//                 insertId: 4, // 新增的主键id
//                 info: '',
//                 serverStatus: 2,
//                 warningStatus: 0
//             }
//         */
//     }
// )

// connection.query(
//     "update company set `name` = 'TSCN' where id = 4;",
//     (err,results)=>{
//         console.log(results);
//     }
//     /*
//         ResultSetHeader {
//             fieldCount: 0,
//             affectedRows: 1,
//             insertId: 0,
//             info: 'Rows matched: 1  Changed: 1  Warnings: 0',
//             serverStatus: 2,
//             warningStatus: 0,
//             changedRows: 1
//         }
//     */
// )

// connection.query(
//     "delete from company where id=4;",
//     (err,res)=>{
//         console.log(res);
//     }
//     /*
//             ResultSetHeader {
//                 fieldCount: 0,
//                 affectedRows: 1,
//                 insertId: 0,
//                 info: '',
//                 serverStatus: 2,
//                 warningStatus: 0
//             }
//     */
// )

// 断开连接
// connection.end();