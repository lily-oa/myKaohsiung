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
// JS array filter 篩選
// 1.篩選出符合條件的內容，組合後回傳新陣列。
// 2.不會影響到原陣列
// 比價網、下拉選擇市區、有誰有及格


var arr = [1, 5, 10];
var newArr = arr.filter(function (item) {
  return item >= 5;
}); //[5, 10]

console.log(newArr); // 分數

var scoreData = [{
  name: '小明',
  score: 88
}, {
  name: '小英',
  score: 62
}, {
  name: '小花',
  score: 53
}];
var filterScore = scoreData.filter(function (item) {
  return item.score >= 60;
});
console.log(filterScore);
//# sourceMappingURL=all.js.map
