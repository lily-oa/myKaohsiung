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


var ary = [];
axios.get('https://hexschool.github.io/ajaxHomework/data.json').then(function (response) {
  console.log('資料有回傳了'); //1

  ary = response.data; //等到資料回傳後，確實寫入陣列裡再觸發以下的函式

  myRenderData();
}); // 非同步，可以把另任函式都寫成一個指令，等確實有資料時再觸發函式

function myRenderData() {
  console.log(ary); //2

  var title = document.querySelector('.title');
  title.textContent = ary[0].name;
}

console.log(ary); //3
//# sourceMappingURL=all.js.map
