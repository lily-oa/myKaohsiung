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
// find 值提取出來 
// findIndex 索引 編號第幾筆資料

const colors = ['red', 'blue', 'black']; 

const blueIndex = colors.findIndex(function(item){
  return item == 'red';
});

console.log(blueIndex);

// 訂單編號
const orders = [
  {
    name: '小廖',
    orderId: '12384955'
  },
  {
    name: '小華',
    orderId: '12384945'
  },
  {
    name: '小美',
    orderId: '1231495'
  }
]

// 需要知道小華訂單的索引值是多少？
const huaId = orders.findIndex(function(item){
  return item.orderId == '12384945';
});

console.log(huaId);
console.log(`這個訂單編號的主人是${orders[huaId].name}`);