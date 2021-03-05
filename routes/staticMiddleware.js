// 静态资源中间件

module.exports = (req,res,next)=>{
    if(req.path.startsWith('api')){
        // 不是静态资源
        next();
    } else {
        if(true){
            res.send('静态资源');
        } else {
            next();
        }
    }
}