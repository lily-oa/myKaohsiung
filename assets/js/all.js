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
// forEach 高雄Open Data 如何整理出對方要求的陣列和物件(整合陣列和物件)
// 免費的物件和投幣式的物件分開放


var myData = [{
  Charge: '免費',
  name: '廖洧杰充電站'
}, {
  Charge: '投幣式',
  name: '小花充電站'
}, {
  Charge: '投幣式',
  name: '小明充電站'
}, {
  Charge: '投幣式',
  name: '小天充電站'
}];
var total = {
  free: [],
  paid: []
};
myData.forEach(function (item, index) {
  if (item.Charge == '免費') {
    total.free.push(item); //將所要的物件放入陣列裡
  } else if (item.Charge == '投幣式') {
    total.paid.push(item);
  }
});
console.log("\u76EE\u524D\u514D\u8CBB\u5145\u96FB\u7AD9\u6709".concat(total.free.length, "\u8655"));
//# sourceMappingURL=all.js.map
