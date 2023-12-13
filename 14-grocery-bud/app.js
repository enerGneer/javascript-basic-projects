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
// editID를 별도로 지정하는 이유는 2번 edit 버튼 눌러놓고 1번 삭제를 하는 유저가 있을 수도 있기 때문이다

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);
// clear items
clearBtn.addEventListener("click", clearItems);
// display items onload 페이지 로드 시 호출
window.addEventListener("DOMContentLoaded", setupItems);

// ****** FUNCTIONS **********
// add item
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  // console.log(id);
  // 시간을 얻어와서 개별 id로 취급한다
  if (value && !editFlag) {
    // console.log("add item to the list");
    const element = document.createElement("article");
    // add class
    element.classList.add("grocery-item");
    // add id
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
    // 아래 Btn 위치 중요! 중간에 innterHTML로 넣어주니까 그 위에 넣으면 반응하지 않음. document에서 찾는 게 아니라 element로 찾는 점도 주의할 것
    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);

    // append child
    list.appendChild(element);
    // display alert
    displayAlert("item added to the list", "success");
    //  show container
    container.classList.add("show-container");
    // add to local storage
    addToLocalStorage(id, value);
    // set back to default 입력하고 나면 빈칸으로 돌아가게 하기
    setBackToDefault();
  } else if (value !== "" && editFlag) {
    // console.log("editing");
    editElement.innerHTML = value;
    displayAlert("value changed", "success");

    // edit local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}

// alert 보여주기
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // 일정 시간 후 alert 지우기
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
  // success랑 danger 두개 있어서 danger 값 보내주고 action으로 보낸 것
}
// clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

// delete item function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  list.removeChild(element);

  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item removed", "danger");

  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}

// edit item function
function editItem(e) {
  // console.log("edit item");
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value 현재의 값을 value text로 셋팅해준다
  grocery.value = editElement.innerHTML;
  editFlag = true;
  // flag를 true로 설정해서 위의 if문 첫번째 else로 넘어감
  editID = element.dataset.id;

  // submit 버튼 이름을 edit 으로 바꿈
  submitBtn.textContent = "edit";
}

// set back to default 입력하고 나면 빈칸으로 돌아가게 하기
function setBackToDefault() {
  // console.log("set back to default");
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// ****** LOCAL STORAGE **********
// add to local storage
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
  console.log(items);
}

function getLocalStorage() {
  //로컬 스토리지에서 "list" 키에 저장된 값을 가져와서 파싱
  return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
  // 만약 "list" 키에 값이 존재하지 않으면 빈 배열을 반환
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  // 현재 로컬 스토리지에 저장된 모든 목록을 가져옴

  // filter 메서드를 사용하여 특정 id와 일치하지 않는 아이템들로 이루어진 새로운 배열을 생성
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });

  localStorage.setItem("list", JSON.stringify(items));
  // 새로운 배열을 JSON 형식의 문자열로 변환하고, 이를 로컬 스토리지의 "list" 키에 저장
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();

  // map 메서드를 사용하여 특정 id와 일치하는 아이템을 찾아 내용을 수정
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// SETUP LOCALSTORAGE.REMOVEITEM('LIST');

// ****** setup items **********

function setupItems() {
  // 페이지 로드 시에 로컬 스토리지에서 저장된 아이템들을 가져와 목록을 설정

  let items = getLocalStorage();

  if (items.length > 0) {
    // 만약 가져온 아이템이 하나 이상 존재한다면, forEach 메서드를 사용하여 각 아이템에 대해 createListItem 함수를 호출 - . 이를 통해 각 아이템이 목록에 추가된다
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
    // 가져온 아이템이 하나 이상일 때, 목록을 표시하는 컨테이너에 show-container 클래스를 추가하여 화면에 보이도록 설정
  }
}

// 가져온 아이템이 있다면 createListItem 함수를 호출하여 각각의 아이템을 목록에 추가
function createListItem(id, value) {
  const element = document.createElement("article");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("grocery-item");
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
  // add event listeners to both buttons;
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);

  // append child
  list.appendChild(element);
}
