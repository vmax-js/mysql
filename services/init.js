const validate = require('validate.js');
const moment = require('moment');
validate.extend(validate.validators.datetime,{
    /**
     * 该函数会自动用于日期格式转换
     * 它会在验证时自动触发，它需要将任何数据转化为时间戳返回
     * 如果无法转化，返回NaN
     * @param {*} value 传入转换的值
     * @param {*} options 针对某个属性的验证配置
     */
    parse(value,options){
        let formats = ['YYYY-MM-DD HH:mm:ss','YYYY-M-D H:m:s','x'];
        if(options.dateOnly){
            formats = ['YYYY-MM-DD','YYYY-M-D','x'];
        }
        return +moment.utc(value,formats,true);
    },
    /**
     * 显示错误的字符串信息
     * @param {*} value 
     * @param {*} options 
     */
    format(value,options){
        let formats = "YYYY-MM-DD";
        if(!options.dateOnly){
            formats += ' HH:mm:ss';
        }
        return moment.utc(value).format(formats);
    }
})