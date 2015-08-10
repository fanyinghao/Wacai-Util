var bookshelf = require('../bookshelf').getBookshelf();
module.exports = bookshelf.Model.extend({
    tableName: 'TBL_ACCOUNTINFO'
}, {
    GetByName: function (name) {
        return new this({ name: name.trim() }).fetch({ require: true }).tap(function (model) {
            return model;
        });
    }
});
//# sourceMappingURL=AccountInfo.js.map