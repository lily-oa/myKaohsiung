const url = 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json'; //高旅網  api
const select = document.querySelector('.select-group'); //行政區
const tabsList = document.querySelector('.tabs-list'); //熱門區
const subtitle = document.querySelector('.subtitle'); //卡片標題
const cardList = document.querySelector('.card-list'); //卡片
const pageList = document.querySelector('.pagination-list'); // 分頁

let data = [];
let page = {};

// 渲染 select filter
function renderData(showData) {
  // 渲染有存在的行政區到選單欄位
  let selectGroup = showData.map(item => item.Zone);
  let newSelect = selectGroup.filter((item, index) => selectGroup.indexOf(item) == index);
  let selectStr = `<option value="高雄全區" selected">-- 高雄全區 --</option>`;
  newSelect.forEach(function (item) {
    let list = `<option value="${item}">${item}</option>`;
    selectStr += list;
  });
  select.innerHTML = selectStr;
  subtitle.textContent = '高雄全區';

  pagination(showData, 1);
}

// 渲染所有清單資料到畫面上

//-----------------------------------------------------------------暫時新學習需用到的語法再寫專案
// JS array filter 篩選
// 1.篩選出符合條件的內容，組合後回傳新陣列。
// 2.不會影響到原陣列
// 比價網、下拉選擇市區、有誰有及格

const arr = [1, 5, 10];
const newArr = arr.filter(function(item){
  return item >= 5;
});
  //[5, 10]
console.log(newArr);

// 分數
const scoreData = [
  {
    name: '小明',
    score: 88
  },
  {
    name: '小英',
    score: 62
  }, 
  {
    name: '小花',
    score: 53
  }
]

const filterScore = scoreData.filter(function(item){
  return item.score >= 60;
});

console.log(filterScore);