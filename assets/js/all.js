"use strict";

var url = 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json'; //高旅網  api

var select = document.querySelector('.select-group'); //行政區

var tabsList = document.querySelector('.tabs-list'); //熱門區

var subtitle = document.querySelector('.subtitle'); //卡片標題

var cardList = document.querySelector('.card-list'); //卡片  ul

var pageList = document.querySelector('.pagination-list'); // 分頁

var data = [];
var page = {}; // axios get data

function getData() {
  axios.get(url).then(function (response) {
    data = response.data.result.records;
    console.log(data);
  });
} // // 渲染 select filter
// function renderData(showData) {
//   // 渲染有存在的行政區到選單欄位
//   let selectGroup = showData.map((item) => {
//     return item.Zone;
//   });
//   let newSelect = selectGroup.filter((item, index) => {
//     return selectGroup.indexOf(item) == index
//   });
//   let selectStr = `<option value="高雄全區" selected">-- 高雄全區 --</option>`;
//   newSelect.forEach(function (item) {
//     let list = `<option value="${item}">${item}</option>`;
//     selectStr += list;
//   });
//   select.innerHTML = selectStr;
//   subtitle.textContent = '高雄全區';
//   // pagination(showData, 1);
// }
// // 渲染所有清單資料到畫面上
//# sourceMappingURL=all.js.map
