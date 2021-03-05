const moment = require('moment');
// 设置语言
moment.locale("zh-cn");
// 得到当前时间
// console.log(moment().toString());
// console.log(moment.utc().toString());
// Wed Mar 03 2021 14:08:14 GMT+0800
// Wed Mar 03 2021 06:08:14 GMT+0000

// 得到当前时间戳
// console.log(moment().valueOf(),+moment());
// console.log(moment.utc().valueOf());
// 1614751773837
// 1614751773838

// 根据指定的时间格式得到时间，时间格式：xxxx-xxx-xx xxxx/xxx/xx 时间戳

// console.log(moment(0).toString(),+moment(0));
// console.log(moment.utc(0).toString(),+moment.utc(0));

// const value = '1970-01-01 00:00:00'; //这个时间要规定为utc时间
// console.log(moment(value).toString(),+moment(value));
// console.log(moment.utc(value).toString(),+moment.utc(value));
// Thu Jan 01 1970 00:00:00 GMT+0800 -28800000
// Thu Jan 01 1970 00:00:00 GMT+0000 0

// 使用时间令牌进行转换
// 令牌是一个格式化的字符串，例如：“yyyy-mm-dd hh:mm:ss”
// x代表时间戳 毫秒
const formats = ["YYYY-MM-DD HH:mm:ss",'YYYY-M-D H:m:s','x'];
// console.log(moment.utc('1970-01-01 00:00:00',formats,true).toString());
// console.log(moment.utc('1970-1-1 0:0:0',formats,true).toString());
// console.log(moment.utc('0',formats,true).toString());
// console.log(moment.utc("1970/1/1 0:0:0",formats,true).toString());

// console.log(+moment.utc("1970/1/1 0:0:0",formats,true)); //NaN
// Thu Jan 01 1970 00:00:00 GMT+0000 
// Thu Jan 01 1970 00:00:00 GMT+0000
// Thu Jan 01 1970 00:00:00 GMT+0000
// Invalid date

// const invalidMoment = moment.utc("1970/1/1 0:0:0",formats,true);
// 判断moment是不是一个无效的时间
// console.log(invalidMoment.isValid());//false

// 显示（客服端）
const m = moment.utc('1997-09-24 18:00:00',formats,true);
// m.isUTC()  //判断是不是UTC时间
// 将UTC时间变为本地时间 
// console.log(m.local().format('YYYY年MM月DD日 HH点mm分ss秒'));
// 1997年09月25日 02点00分00秒

// 将本地时间变为UTC时间
// const toServ = m.utc().format('YYYY/MM/DD HH:mm:ss');
// console.log(toServ);
// 1997/09/24 18:00:00

// console.log(m.local().fromNow());
// 23 years ago
// 23 年前