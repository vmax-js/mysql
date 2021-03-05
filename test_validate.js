require('./init')
const stuServ = require('./services/studentService');

stuServ.addClass({
    name:"bihongqing",
    birthday:"2010-02-03",
    sex:false,
    mobile:'13340245237',
    classId:10,
    a:1,
    b:3,
    createdAt:'2010-2-2 10:10:10'
});
// { name: [ "Name can't be blank" ] }