require('./bookshelf').create(require('./config'));
var AccountInfo = require('./Models/AccountInfo');
var TradeInfo = require('./Models/TradeInfo');
var TradeType = require('./Models/TradeType');
var OutGoSubTypeInfo = require('./Models/OutGoSubTypeInfo');
var Book = require('./Models/Book');
var ProjectInfo = require('./Models/ProjectInfo');
var alipayData = require('./alipayData');

var async = require('async');
async.eachSeries(alipayData, function (obj, callback) {
    if (obj['交易状态'].trim() == '交易成功') {
        //插入数据
        AccountInfo.GetByName(obj['账户'].trim()).then(function (account) {
            OutGoSubTypeInfo.GetByName(obj['类别'].trim()).then(function (typeInfo) {
                TradeInfo.Insert({
                    tradetype: obj['收/支'].trim() == '收入' ? TradeType.IN_COME: TradeType.OUT_GO,
                    date: new Date(obj['付款时间'].trim()).getTime() / 1000,
                    money: parseInt(obj['金额（元）'].trim())*100,
                    comment: obj['交易对方'].trim() + '-' + obj['商品名称'].trim(),
                    createdate: new Date(obj['付款时间'].trim()).getTime() / 1000,
                    editdate: new Date(obj['付款时间'].trim()).getTime() / 1000,
                    accountUuid: account.get('uuid'),
                    bookUuid: Book.DAILY.uuid,
                    projectUuid: ProjectInfo.richang.uuid,
                    typeUuid: typeInfo.get('uuid')
                }).then(function (model) {
                    console.log(model);
                });
            });
        });
    }
    callback();
}, function (err) {
    if (err) {
        console.log('Error: ', JSON.stringify(err));
    }
});
