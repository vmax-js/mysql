// 处理错误的中间件
const sendMsg = require('./getSendResult');
module.exports = (err, req, res, next) => {
    // console.log(req.baseUrl);
    if (err) {
        const errObj = err instanceof Error ? err.message : err;
        // 发生了错误
        res.status(500).send(sendMsg.getErr(errObj));
    } else {
        next();
    }
}