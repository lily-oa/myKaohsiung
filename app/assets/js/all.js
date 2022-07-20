
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
// forEach 高雄Open Data 如何整理出對方要求的陣列和物件(整合陣列和物件)
// 免費的物件和投幣式的物件分開放

let myData = [
  {
    Charge: '免費',
    name: '廖洧杰充電站'
  },
  {
    Charge: '投幣式',
    name: '小花充電站'
  },
  {
    Charge: '投幣式',四
    name: '小明充電站'
  },
  {
    Charge: '投幣式',
    name: '小天充電站'
  },
]

let total = {
  free: [],
  paid: []
}

myData.forEach((item, index) => {
  if(item.Charge == '免費'){
    total.free.push(item);  //將所要的物件放入陣列裡
  }else if(item.Charge == '投幣式'){
    total.paid.push(item);
  }
});
console.log(`目前免費充電站有${total.free.length}處`);
console.log(`目前投幣式充電站有${total.paid.length}處`);