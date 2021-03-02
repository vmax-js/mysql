// http请求 
const axios = require('axios');
// jquery核心库
const cheerio = require('cheerio');

const Book = require('../models/Book.js');
const data = require('./data.js');
/**
 * 得到首页所有书的地址
 */
async function getUrlArr() {
    const res = await axios.get("https://book.douban.com/latest?icn=index-latestbook-all");
    const $ = cheerio.load(res.data);
    const a = $('#content li a.cover');
    const herfArr = a.map((i, ele) => {
        const herf = ele.attribs['href'];
        return herf;
    }).get(); //get() 得到真实的数组
    return herfArr;
}

/**
 * 得到每本书的数据
 */
async function getOneBookData(url) {
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);
    const name = $('h1 span').text();
    const imgUrl = $('#content #mainpic a').attr('href');
    const spans = $('#info span.pl');
    const publishDateSpan = spans.filter((i, ele) => {
        return $(ele).text().includes('出版年');
    });
    const publishDate = publishDateSpan[0].nextSibling.nodeValue.trim();
    const author = $('#info span a').text().trim();
    return {
        name,
        imgUrl,
        publishDate,
        author
    };
}

/**
 * 得到所有书的数据
 */
async function getAllBooks() {
    const urlArr = await getUrlArr();
    const res = urlArr.map(ele => {
        return getOneBookData(ele);
    });
    return Promise.all(res);
}

/**
 * 将数据导入到数据库中
 */
async function loadModels(data){
    // let datas = await getAllBooks();
    // if(datas.length === 0){
    //     datas = data;
    // }
    await Book.bulkCreate(data);
    console.log("书籍数据导入成功！");
}
// console.log(data);
loadModels(data);

// getAllBooks().then(res => {
//     console.log(res);
// });

// getOneBookData("https://book.douban.com/subject/35049687/").then(res=>{
//     console.log(res);
// });