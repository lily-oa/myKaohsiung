
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
let myData = [
  {
    Charge: '免費',
    name: '廖肴杰充電站'
  },
  {
    Charge: '投幣式',
    name: '小花杰充電站'
  },
  {
    Charge: '投幣式',
    name: '小明杰充電站'
  },
  {
    Charge: '投幣式',
    name: '你好充電站'
  },
]

const list = document.querySelector('.list');  //抽出讓兩邊都能使用

//初始化邏輯，一開始載入的畫面顯示
function init() {
  
  let str = '';  //初始值
  myData.forEach((item) => {
    let content = `<li class="fw-bold">•${item.name}，${item.Charge}</li>`;
    str += content;
  });
  list.innerHTML = str;
}

init();


// 篩選器邏輯，監聽它有沒有抓到資料
const stationFilter = document.querySelector('.filter');  

stationFilter.addEventListener('click', function (e) {
  if (e.target.value == undefined) {
    console.log('你點擊到空的地方');
    return;
  } else {
    let str = '';  // 設定初始化
    myData.forEach((item, index) => {
      // 如果選擇的是 "全部 "的按鈕時，就讓它顯示全部的字串
      if(e.target.value=='全部'){
        let content = `<li class="fw-bold">•${item.name}，${item.Charge}</li>`;
        str += content;
      }else if(e.target.value == item.Charge) {
        let content = `<li class="fw-bold">•${item.name}，${item.Charge}</li>`;
        str += content;
      }
    });
    list.innerHTML = str;  // innerHTML 當你按點擊時它會把裡面的內容全部清空再將字串放入
  }
});

// 新增邏輯，input可以直接取值
const stationName = document.querySelector('.stationName');
const stationCharge = document.querySelector('.stationCharge');
const myBtn = document.querySelector('.myBtn');

// 必須先取值，再將資料變成物件格式 push到 myData陣列裡去，最後將新增的資料顯示在頁面上
myBtn.addEventListener('click', (e) => {
  console.log(stationName.value);
  console.log(stationCharge.value);
// 物件初始化，組出新的物件格式
  let obj = {};
  obj.Charge = stationCharge.value;
  obj.name = stationName.value;
  console.log(obj);
});