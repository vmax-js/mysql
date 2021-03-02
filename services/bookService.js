const Book = require("../models/Book");

exports.addBook = async function (bookObj) {
    const ins = await Book.create(bookObj);
    return ins.toJSON();
}

exports.deleteBook = async function (bookId) {
    const result = await Book.destroy({
        where: {
            id: bookId
        }
    });
    return result;
}
exports.updateBook = async function (id, bookObj) {
    const result = await Book.update(bookObj, {
        where: {
            id = id,
        }
    });
    return result;
}

exports.getBook = async function(name){
    const result = await Book.findOne(name);
    if(result){
        return JSON.parse(JSON.stringify(result));
    }
    return null;
}