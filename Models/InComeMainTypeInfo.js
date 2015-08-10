var bookshelf = require('../bookshelf').getBookshelf();
module.exports = bookshelf.Model.extend({
    tableName: 'TBL_INCOMEMAINTYPEINFO'
}, {
    GetByName: function (name) {
        return new this({ name: name.trim() }).fetch({ require: true }).tap(function (model) {
            return model;
        });
    }
});
//# sourceMappingURL=InComeMainTypeInfo.js.map