"use strict";

var url = 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json'; //高旅網  api

var select = document.querySelector('.select-group'); //行政區

var tabsList = document.querySelector('.tabs-list'); //熱門區

var subtitle = document.querySelector('.subtitle'); //卡片標題

var cardList = document.querySelector('.card-list'); //卡片

var pageList = document.querySelector('.pagination-list'); // 分頁

var data = [];
var page = {}; // 渲染 select filter

function renderData(showData) {
  // 渲染有存在的行政區到選單欄位
  var selectGroup = showData.map(function (item) {
    return item.Zone;
  });
  var newSelect = selectGroup.filter(function (item, index) {
    return selectGroup.indexOf(item) == index;
  });
  var selectStr = "<option value=\"\u9AD8\u96C4\u5168\u5340\" selected\">-- \u9AD8\u96C4\u5168\u5340 --</option>";
  newSelect.forEach(function (item) {
    var list = "<option value=\"".concat(item, "\">").concat(item, "</option>");
    selectStr += list;
  });
  select.innerHTML = selectStr;
  subtitle.textContent = '高雄全區';
  pagination(showData, 1);
} // 渲染所有清單資料到畫面上
//-----------------------------------------------------------------暫時新學習需用到的語法再寫專案
// findIndex 索引  編號


var colors = ['red', 'blue', 'black'];
var colorNumber = colors.findIndex(function (item) {
  return item == 'black';
});
console.log(colorNumber);
console.log('--------------------------------------'); // 訂單編號

var orders = [{
  name: '小廖',
  orderId: '1234555'
}, {
  name: '小華',
  orderId: '1234556'
}, {
  name: '小美',
  orderId: '1234557'
}];
var huaId = orders.findIndex(function (item) {
  return item.orderId == '1234557';
});
console.log(huaId);
console.log("\u9019\u500B\u8A02\u55AE\u7DE8\u865F\u662F".concat(orders[huaId].name));
//# sourceMappingURL=all.js.map
