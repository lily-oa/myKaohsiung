
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
// ajax post api
// https://hexschool-tutorial.herokuapp.com/api/signup
// 註冊
const account = document.querySelector('.account');
const password = document.querySelector('.password');
const send = document.querySelector('.send');
send.addEventListener('click', function(e){
  callSignUp();
});


function callSignUp(){
  if(account.value==''||password.value==''){
    alert('請輸入正確資料');
    return;
  }
  let obj = {};
  obj.email = account.value;
  obj.password = password.value;
  console.log(obj);
  axios.post('https://hexschool-tutorial.herokuapp.com/api/signup', obj)
  .then(function(response){
    if(response.data.message=='帳號註冊成功'){
      alert('恭喜註冊成功');
    }else{
      alert('帳號註冊失敗，可能有人用你的email註冊');
    }
    account.value = '';
    password.value = '';
  })
  .catch(function(error){
    console.log(error);
  });
}

//登入
// https://hexschool-tutorial.herokuapp.com/api/signin
const accountSignIn = document.querySelector('.account-signIn');
const passwordSignIn = document.querySelector('.password-signIn');
const sendSignIn = document.querySelector('.send-signIn');
sendSignIn.addEventListener('click', function(e){
  callSignIn();
});

function callSignIn(){
  let obj2 = {};
  obj2.email = accountSignIn.value;
  obj2.password = passwordSignIn.value;
  console.log(obj2);

  axious.post('https://hexschool-tutorial.herokuapp.com/api/signin')
  .then(function(response){
    console.log(response.data)
  })
  .catch(function(error){
    console.log(error);
  });
}