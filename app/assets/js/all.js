
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
// https://hexschool.github.io/ajaxHomework/data.json
axios.get('https://hexschool.github.io/ajaxHomework/data.json')  //抓取這個網址的資料並回傳回來
  .then(function(response){        //抓取的資料回傳後才會觸發then裡的函式
    let ary = response.data;       // 將抓到資料暫存在 ary，這是我的資料集
    console.log(ary[0].name);      // 我只想抓它的名字
    const title = document.querySelector('.title'); // 指定範圍
    console.log(title);
    title.innerHTML = ary[0].name; //將資料寫入網頁的指定範圍
  });