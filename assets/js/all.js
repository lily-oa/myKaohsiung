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


var myData = [{
  Charge: '免費',
  name: '廖肴杰充電站'
}, {
  Charge: '投幣式',
  name: '小花杰充電站'
}, {
  Charge: '投幣式',
  name: '小明杰充電站'
}, {
  Charge: '投幣式',
  name: '你好充電站'
}];
var list = document.querySelector('.list');
var str = ''; //初始值

myData.forEach(function (item) {
  // console.log(`${item.name}，${item.Charge}`);
  var content = "<li class=\"fw-bold list-style-disc\">\u2022".concat(item.name, "\uFF0C").concat(item.Charge, "</li>");
  str += content;
  console.log(str);
});
list.innerHTML = str;
//# sourceMappingURL=all.js.map
