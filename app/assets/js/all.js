
const url = 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json'; //高旅網  api
const select = document.querySelector('.select-group');      //行政區
const tabsList = document.querySelector('.tabs-list');       //熱門區
const subtitle = document.querySelector('.subtitle');        //卡片標題
const cardList = document.querySelector('.card-list');       //卡片
const pageList = document.querySelector('.pagination-list'); // 分頁

let data = [];
let page = {};

// 渲染 select filter
function renderData(showData) {
  // 渲染有存在的行政區到選單欄位
  let selectGroup = showData.map(item => item.Zone);
  let newSelect = selectGroup.filter((item, index) => selectGroup.indexOf(item) == index);
  let selectStr = `<option value="高雄全區" selected">-- 高雄全區 --</option>`;
  newSelect.forEach(function(item){
    let list=`<option value="${item}">${item}</option>`;
    selectStr += list;
  });
  select.innerHTML = selectStr;
  subtitle.textContent = '高雄全區';

  pagination(showData, 1);
}

// 渲染所有清單資料到畫面上

//-----------------------------------------------------------------暫時新學習需用到的語法再寫專案
// JS array filter、 find篩選
const arr = [1, 2, 3, 4, 5, 10, 20, 30, 40];
const newArr = arr.find(function(item){
  console.log(item);   //看陣列跑了幾次
  return item >= 5; 
});

console.log(newArr);

//分數
const scoreData = [
  {
    name: '小明',
    score: 88
  },
  {
    name: '小應',
    score: 62
  },
  {
    name: '小花',
    score: 53
  }
]
const filterScore = scoreData.find(function(item){
  return item.score >= 60;
});

console.log(filterScore);