// const mysql = require('mysql2/promise');
// async function test(id){
//     const connection = await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'tan501924?',
//         database: 'companydb',
//         multipleStatements: true //运行多条sql语句默认为false
//     });
//     const sql = `select * from company where id=${id}`;
//     const [results] = await connection.query(sql);
//     console.log(results);
//     connection.end();
// }
// test(`'';insert into company(\`name\`,location,buildDate) values('t','dd',curdate());`); // 最终导致在数据库中添加了一条数据

// 防止sql注入
const mysql = require('mysql2/promise');
async function test(id){
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'tan501924?',
        database: 'companydb',
        multipleStatements: true //运行多条sql语句默认为false
    });
    const sql = `select * from company where id=?`;
    const [results] = await connection.execute(sql,[id]);
    console.log(results); //[]
    connection.end(); 
}
test(`'';insert into company(\`name\`,location,buildDate) values('t','dd',curdate());`); // 最终导致在数据库中添加了一条数据
