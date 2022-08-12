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
// ajax post api
// https://hexschool-tutorial.herokuapp.com/api/signup
// 註冊


var account = document.querySelector('.account');
var password = document.querySelector('.password');
var send = document.querySelector('.send');
send.addEventListener('click', function (e) {
  callSignUp();
});

function callSignUp() {
  if (account.value == '' || password.value == '') {
    alert('請輸入正確資料');
    return;
  }

  var obj = {};
  obj.email = account.value;
  obj.password = password.value;
  console.log(obj);
  axios.post('https://hexschool-tutorial.herokuapp.com/api/signup', obj).then(function (response) {
    if (response.data.message == '帳號註冊成功') {
      alert('恭喜註冊成功');
    } else {
      alert('帳號註冊失敗，可能有人用你的email註冊');
    }

    account.value = '';
    password.value = '';
  })["catch"](function (error) {
    console.log(error);
  });
} //登入
// https://hexschool-tutorial.herokuapp.com/api/signin


var accountSignIn = document.querySelector('.account-signIn');
var passwordSignIn = document.querySelector('.password-signIn');
var sendSignIn = document.querySelector('.send-signIn');
sendSignIn.addEventListener('click', function (e) {
  callSignIn();
});

function callSignIn() {
  if (accountSignIn.value == '' || passwordSignIn.value == '') {
    alert('請填寫正確資料');
    return;
  }

  var obj2 = {};
  obj2.email = accountSignIn.value;
  obj2.password = passwordSignIn.value;
  console.log(obj2);
  axios.post('https://hexschool-tutorial.herokuapp.com/api/signin', obj2).then(function (response) {
    if (response.data.message == '登入成功') {
      alert('恭喜帳號註冊成功');
    } else {
      alert('帳號註冊失敗');
    }

    accountSignIn.value = '';
    passwordSignIn.value = '';
  })["catch"](function (error) {
    console.log(error);
  });
}
//# sourceMappingURL=all.js.map
