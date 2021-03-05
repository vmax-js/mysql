require('./init');

// const express = require('express');

// const app = express();

// app.get('/api',(req,res,next)=>{
//     console.log('handle1');
//     // res.send('sss');
//     // throw new Error('错误');
//     next(new Error('错误'))
//     // next();
// },(err,req,res,next)=>{
//     // console.log(err);
//     console.log('handle2');
//     next();
// })
// app.get('/api',(req,res,next)=>{
//     console.log('handle3');
//     next();
// })
// app.use('/api',require('./routes/errorMiddleware'))
// app.listen(12345,()=>{
//     console.log('server listen on 1234');
// })