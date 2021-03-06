// require('./init');

const express = require('express');

const app = express();
const path = require('path');

const staticRoot = path.resolve(__dirname,'../public');

// 静态资源映射
app.use(express.static(staticRoot,{
    index:'index.html', //默认是这个
}))

// 解析 application/x-www-x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({extended:true}))

// 解析application/json 格式的请求体
app.use(express.json());

// 处理api的请求
app.use('/api/student',require('./api/student'));
// app.use('/api/admin',require('./api/admin'));
// app.use('/api/student',require('./api/student'));
// app.use('/api/student',require('./api/student'));

// 处理错误的中间件
app.use('/api',require('./errorMiddleware'));

app.listen(12345,()=>{
    console.log('server listen on 12345');
})

// app.post('/api/student',(req,res)=>{
//     console.log(req.body);
//     // 添加学生
// })
// app.get('/api/student',(req,res)=>{
//     console.log(req.body);
//     // 获取学生
// })

// app.delete('/api/student',(req,res)=>{
//     // 删除学生
// })

// app.put('/api/student/:id',(req,res)=>{
//     // 修改学生
// })

// const studentRouter = express.Router();

// studentRouter.get('/',(req,res)=>{
//     // console.log('获取学生');
//     res.send('获取学生');
// })

// studentRouter.post('/',(req,res)=>{
//     // console.log('添加学生');
//     res.send('添加学生');
// })

// studentRouter.put('/:id',(req,res)=>{
//     // console.log('修改学生');
//     res.send('修改学生');
// })
// studentRouter.delete('/:id',(req,res)=>{
//     // console.log('删除学生');
//     res.send('删除学生');
// })

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

