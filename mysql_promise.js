const mysql = require('mysql2/promise');
async function test(){
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'tan501924?',
        database: 'companydb',
        multipleStatements: true //运行多条sql语句默认为false
    });
    const [results] = await connection.query('select * from company;');
    console.log(results);
    connection.end();
}
test();
