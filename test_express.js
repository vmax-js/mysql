require('./init');

// const http = require('http');
// const express = require('express');
// const app = express();

// const server = http.createServer(app);

// server.listen(9527,()=>{
//     console.log('server listen on 9527');
// })



const express = require('express');

const app = express();
// app.get('/',(req,res)=>{
//     console.log(req.headers);//获取请求头
//     console.log('请求路径',req.path);
//     console.log('请求参数',req.query);

// })

app.get('/:id',(req,res)=>{
    console.log(req.headers);//获取请求头
    console.log('请求路径',req.path);
    console.log('请求参数',req.query);
    console.log('获取动态id',req.params);

    // 响应
    // res.send('<h1>你好啊</h1>');
    
    // 设置响应头
    // res.setHeader("a","tanbiao");
    // res.send();

    // 设置重定向
    // res.status(302).header('location','https://duyi.ke.qq.com').end();
    // res.status(302).location('https://duyi.ke.qq.com').end();
    res.redirect(302,'https://duyi.ke.qq.com');
})
// 匹配所有方法
app.all()

// 匹配任何路线
app.get('*',()=>{

});
app.listen(9527,()=>{
    console.log('server listen on 9527');
})