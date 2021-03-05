require('./init');

const stuServ = require('./services/studentService');

stuServ.getStudents().then(res=>{
    console.log(res);
})