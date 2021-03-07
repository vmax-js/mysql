const express = require('express');
const {asyncHandler} = require('../getSendResult');
const adminServ = require('../../services/adminService');
const router = express.Router();

router.post('/login',asyncHandler(async(req,res)=>{
    const result =  await adminServ.login(req.body.loginId,req.body.loginPwd);
    if(result){
        // 登录成功 
        const value = result.id
        // 针对浏览器
        res.cookie("token",value,{
            path:'/',
            domain:'localhost',
            maxAge:100000,//毫秒
            // httpOnly:true,
            // signed:true
        });
        // 其它设备
        res.header("authorization",value);
    }
    return result;
}))

module.exports = router;