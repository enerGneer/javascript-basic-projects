// ****** SELECT ITEMS **********
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  // if (!value) {
  //   console.log("value is falsy");
  // }

  const id = new Date().getTime().toString();
  // console.log(id);
  // 시간을 얻어와서 개별 id로 취급한다
  if (value && !editFlag) {
    console.log("add item to the list");
  } else if (value && editFlag) {
    console.log("editing");
  } else {
    displayAlert("please enter value", "danger");
  }
}
// alert 보여주기
function displayAlert(text, action) {
  alert.textContent = "empty value";
  alert.classList.add(`alert-${action}`);

  // 일정 시간 후 alert 지우기
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
  // success랑 danger 두개 있어서 danger 값 보내주고 action으로 보낸 것
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
