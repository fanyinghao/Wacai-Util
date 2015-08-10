var bookshelf = require('../bookshelf').getBookshelf();
var uuid = require('uuid');

module.exports = bookshelf.Model.extend({
    tableName: 'TBL_TRADEINFO'
}, {
        Insert: function (model) {
            return new this({
                uuid: uuid.v1(),
                tradetype: model.tradetype,
                isdelete: 0,
                updatestatus: 0,
                date: model.date,
                money: model.money,
                comment: model.comment,
                source: 0,
                sourcemark: '',
                lat: 0.0,
                lng: 0.0,
                createdate: model.createdate,
                editdate: model.editdate,
                isreaded: 0,
                reimburse: 0,
                money2: 0,
                date2: 0,
                alertType: 0,
                alertDay: 0,
                accountUuid: model.accountUuid,
                accountUuid2: model.accountUuid2,
                bookUuid: model.bookUuid,
                projectUuid: model.projectUuid,
                typeUuid: model.typeUuid
            })
                .save()
                .tap(function (model) {
                    return model;
                });
        }
    });