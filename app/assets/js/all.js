
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

//可以將此設定成一個初始化的 function 
function init() {
  const list = document.querySelector('.list');
  let str = '';  //初始值
  myData.forEach((item) => {
    // console.log(`${item.name}，${item.Charge}`);
    let content = `<li class="fw-bold">•${item.name}，${item.Charge}</li>`;
    str += content;
    // console.log(str);
  });
  list.innerHTML = str;
}

init();

// 監聽它有沒有抓到資料
const stationFilter = document.querySelector('.filter');
// console.log(stationFilter);
stationFilter.addEventListener('click', function (e) {
  // console.log(e.target.value == undefined);
  if (e.target.value == undefined) {
    console.log('你按到空白處了!!');
    return;  //中斷程式
  } else {
    // console.log(e.target.value);
    let str = '';
    myData.forEach((item, index) => {
      // console.log(e.target.value == item.Charge);
      if (e.target.value == item.Charge) {
        str += `<li>•${item.name}，${item.Charge}</li>`;
      }
    });
    const list = document.querySelector('.list');
    list.innerHTML = str;
  }
});


