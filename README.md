## 3-8 moment库

- 中文网：momentjs.cn

- 下载：```npm i moment --save```

- 基本使用 test_moment.js


## 3-9 数据验证

- 数据验证的位置 
  - 前端客服端（为了用户体验）
  - 路由层（验证接口格式是否正常）
  -  业务逻辑层（保证业务完整性）
  -  数据库验证（约束）（保证数据完整性）


### 业务逻辑层验证
- 相关库 支持前端和后端 
 1. validator ```github.com/validatorjs/validator``` 验证某个字符串
 2. validate.js 用于验证某个对象的属性 ```validatejs.org```

- 使用validate.js
    1. 安装 ```npm i validate.js```

## 访问器和虚拟字段

## 日志记录

- 第三方库
  - 每一个语言都有一个日志记录的库
  - nodejs中是log4js
  - ```log4js-node.github.io/log4js-node/```
### 日志级别

leave： 从低到高
all trace（跟踪）debug info warn error fatal（灾难） mark off
category（日志分类）：sql日志 请求日志等
appender（日志出口）：日志的书写格式（layouts）
```npm i log4js```


## expresss
```expressjs.com.cn```
- http模块的问题
  1. 根据不同的请求方法和请求路径处理起来比较麻烦
  2. 


