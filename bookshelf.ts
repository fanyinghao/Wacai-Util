var bookshelf;
module.exports.create = function (config) {
    if (config == undefined)
        throw new Error('not configure db file path');
    var knex = require('knex')({
        client: 'sqlite3',
        connection: {
            filename: config.WACAI_DATABASE
        }
    });
    bookshelf = require('bookshelf')(knex);
};
module.exports.getBookshelf = function () {
    return bookshelf;
};
