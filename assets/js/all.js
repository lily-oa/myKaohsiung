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
    renderData(data);
  });
}

getData(); // 渲染 select filter  初始化

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
  subtitle.textContent = '高雄全區'; // pagination(showData, 1);
} // 渲染所有清單資料到畫面上


function updateData(showData) {
  var str = '';
  showData.forEach(function (item) {
    var content = "li class=\"card\">\n      <div class=\"card-header\" style=\"background-image:url(".concat(item.picture1, ")\" title=\"").concat(item.Picdescribe1, "\">\n        <div class=\"card-title\">\n          <h4>").concat(item.Name, "</h4>\n          <p>").concat(item.Zone, "</p>\n        </div>\n      </div>\n      <ul class=\"card-body\">\n        <li>\n          <i class=\"fas fa-clock\"></i>\n          <p>").concat(item.Opentime, "</p>\n        </li>\n        <li>\n          <i class=\"fas fa-map-marker-alt\"></i>\n          <p>").concat(item.Add, "</p>\n        </li>\n        <li class=\"card-footer-list d-flex flex-lg-column justify-content-lg-start align-items-lg-start\">\n          <div class=\"card-footer-item\" data-charge=\"free\">\n            <i class=\"fas fa-mobile-alt\"></i>\n            <p>").concat(item.Tel, "</p>\n          </div>\n          <div class=\"card-footer-item\" data-display=").concat(item.Ticketinfo == '免費參觀' ? "" : "d-none", ">\n            <i class=\"fas fa-tag\"></i>\n            <p>").concat(item.Ticketinfo, "</p>\n          </div>\n        </li>\n      </ul>\n    </li>");
    str += content;
  });
  cardList.innerHTML = str;
} // 監聽select change event
// select.addEventListener('change', switchDataSelect, false);
// function switchDataSelect(e){
//   if(e.target.value == ''){
//     return;
//   }
//   let chosenDistrict = e.target.value;
//   dataFilter(chosenDistrict);
//   // 切換分頁
//   if(e.target.dataset.type === 'tab' || e.target.dataset.type === 'num'){
//     const page = e.target.dataset.page;
//     dataFilter(chosenDistrict);
//     pagination(dataFilter(chosenDistrict), page);
//   }
//   return false;
// }
// 輸入showData 資料，用來計算 page 數量資料


function pagination(data, nowPage) {
  var dataTotal = data.length;
  var showPerPage = 6; // 可能會有餘數 -> 無條件進位

  var pageTotal = Math.ceil(dataTotal / showPerPage);
  var currentPage = nowPage; // 

  if (currentPage > pageTotal) {
    currentPage = pageTotal;
  }
}
//# sourceMappingURL=all.js.map
