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
// https://hexschool.github.io/ajaxHomework/data.json


axios.get('https://hexschool.github.io/ajaxHomework/data.json') //抓取這個網址的資料並回傳回來
.then(function (response) {
  //抓取的資料回傳後才會觸發then裡的函式
  var ary = response.data; // 將抓到資料暫存在 ary，這是我的資料集

  console.log(ary[0].name); // 我只想抓它的名字

  var title = document.querySelector('.title'); // 指定範圍

  console.log(title);
  title.innerHTML = ary[0].name; //將資料寫入網頁的指定範圍
});
//# sourceMappingURL=all.js.map
