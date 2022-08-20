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
// 實作 toDoList 練習


var myData = [];
var txt = document.querySelector('.txt');
var save = document.querySelector('.save');
var list = document.querySelector('.list'); //寫一個函式把裡面的處理方式都包起來
// 狀態初始化用的

function myRenderData() {
  var str = '';
  myData.forEach(function (item, index) {
    str += "\n  <li class=\"ms-2\">\xB7".concat(item.content, "<input type=\"button\" value=\"\u522A\u9664\u4EE3\u8FA8\" data-num=\"").concat(index, "\" class=\"delete m-2\"></li>\n  ");
  });
  var list = document.querySelector('.list');
  list.innerHTML = str;
  txt.value = ''; //按 " 儲存代辦 " 後會回到空值的狀態
} //新增代辦功能


save.addEventListener('click', function (e) {
  var myObj = {};
  myObj.content = txt.value;
  myData.push(myObj);
  myRenderData();
}); // 刪除代辦功能

list.addEventListener('click', function (e) {
  if (e.target.getAttribute('class') !== 'delete m-2') {
    alert('你點到其它地方了喔!!');
    return;
  }

  var num = e.target.getAttribute('data-num'); //將索引值取出

  myData.splice(num, 1); //刪除資料

  myRenderData(); //再次將資料給顯示出來
});
//# sourceMappingURL=all.js.map
