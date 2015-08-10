var xlsx = require('xlsx');
var config = require('./config');
var workbook = xlsx.readFile(config.ALIPAY_XLSX);
var sheetNameList = workbook.SheetNames;
var worksheet = workbook.Sheets[sheetNameList[0]];
var alipayData = xlsx.utils.sheet_to_json(worksheet);
module.exports = alipayData;
//# sourceMappingURL=alipayData.js.map