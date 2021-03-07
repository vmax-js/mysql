const {
    getErr
} = require('./getSendResult')
const {
    pathToRegexp
} = require("path-to-regexp")
const needTokenApi = [{
        method: "GET",
        path: "/api/student"
    },
    {
        method: "POST",
        path: "/api/student/:id"
    },
    {
        method: "GET",
        path: "/api/student/:id"
    },
    {
        method: "POST",
        path: "/api/student"
    },
]

// 用于解析token
module.exports = (req, res, next) => {
    const apis = needTokenApi.filter(api => {
        const reg = pathToRegexp(api.path);
        if (api.method === req.method && reg.test(req.path)) {
            return true;
        }
        return false;
    });
    if(apis.length === 0){
        next();
        return;
    }
    let token = req.cookies.token;
    // let token = req.signedCookies.token;
    if (!token) {
        // 其它设备
        token = req.headers.authorization;
    }
    if (!token) {
        // 没有登录
        handleNonToken(req, res, next);
        return;
    }
    next();
}

// 处理没有认证的情况
function handleNonToken(req, res, next) {
    res.status(403).send(getErr('you dont have any token to access the api', 403));
}