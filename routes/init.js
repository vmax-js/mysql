// require('./init');

const express = require('express');

const app = express();
const path = require('path');

const staticRoot = path.resolve(__dirname,'../public');

app.use(express.static(staticRoot,{
    index:'index.html', //默认是这个
}))
app.use(express.urlencoded({extended:true}))

app.use(express.json());
app.get('/api/student',(req,res)=>{
    console.log(req.body);
})
// app.use('/abc',require('./staticMiddleware'));
// app.get('/api',(req,res,next)=>{
//     console.log('handle1');
//     // res.send('sss');
//     // throw new Error('错误');
//     next(new Error('错误'))
//     // next();
// })
// app.get('/api',(req,res,next)=>{
//     console.log('handle3');
//     res.send('123');
//     next();
// })

app.use('/api',require('./errorMiddleware'));
app.listen(12345,()=>{
    console.log('server listen on 12345');
})