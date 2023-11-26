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
    console.log("empty value");
  }
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
