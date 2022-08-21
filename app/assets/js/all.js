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
// 實作 toDoList 練習
let myData = [];
const txt = document.querySelector('.txt');
const save = document.querySelector('.save');
const list = document.querySelector('.list');

// 寫一個函式把裡面的處理方式都包起來
// 狀態初始化用的
function myRenderData(){
  let str = '';
  myData.forEach(function(item, index){
    str += `
    <li class="m-2 fs-4">·${item.content}<input type="button" value="刪除" data-num="${index}" class="delete m-2"></li>
    `
  });
  const list = document.querySelector('.list');
  list.innerHTML = str;
  txt.value = '';
}

// myRender();
//新增代辦功能
save.addEventListener('click',function(e){
  if(txt.value ==''){
    alert('此欄位不可為空');
    return;
  }
  let myObj = {};
  myObj.content = txt.value;
  myData.push(myObj);
  myRenderData();
});

// 刪除代辦功能
list.addEventListener('click', function(e){
  if(e.target.getAttribute('class')!=='delete m-2'){
    alert('你沒有點到正確的按鈕');
    return;
  }
  let num = e.target.getAttribute('data-num');
  myData.splice(num, 1);
  myRenderData();
});