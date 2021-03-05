require('./init');
const express = require('express');
console.log(process.env.NODE_ENV);
const app = express();

app.get('*',(req,res)=>{
    res.send([1,2,3,4]);
})

app.listen(9527,()=>{
    console.log('server listen on 9527');
})
