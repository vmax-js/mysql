const log4js = require('log4js');
const path = require('path')
log4js.configure({
    categories: {
        sql: {
            appenders: ['sql'],
            level: 'all'
        },
        default: {
            appenders: ['default'],
            level: 'all'
        }
    },
    appenders: {
        sql: {
            type: 'dateFile',
            filename: path.resolve(__dirname, 'logs', 'sql', 'logging.log'),
            maxLogSize:1024*1024,//配置文件的最大字节数
            keepFileExt:true,//保留文件后缀，
            daysToKeep:0,//保留时间
            layout:{
                type:'pattern',
                pattern:'%d{yyyy-MM-dd hh:mm:ss} %p %c: %m%n'
            }
        },
        default:{
            type:'stdout', //控制台输出
            // filename:path.resolve(__dirname,'logs','default','logging.log')
        }
    }
})
process.on('exit',()=>{
    log4js.shutdown();
})
const sqlLogger = log4js.getLogger('sql');
const defaultLogger = log4js.getLogger();
exports.sqlLogger = sqlLogger;
exports.logger = defaultLogger;