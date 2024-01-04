import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

const title = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");

// 페이지 인덱스와 배열 관리
let index = 0;
let pages = [];

// UI를 설정하는 함수. 초기화init와 페이지 이동 시에 사용된다
const setupUI = () => {
  // 페이지에 팔로워 정보 표시
  displayFollowers(pages[index]);
  // 페이지 이동 버튼 표시
  displayButtons(btnContainer, pages, index);
};

// 페이지 로드 시 호출되는 초기화 함수
const init = async () => {
  // 팔로워 데이터를 가져올 때까지 기다려!
  const followers = await fetchFollowers();
  // 다 가져오면 pogination 으로 텍스트 변경
  title.textContent = "pagination";
  // pages 배열에 pagetnate에 가져온 팔로워 데이터 보낸 걸 받아서 넣는다
  pages = paginate(followers);
  setupUI();
};

// 클릭 이벤트 리스너
btnContainer.addEventListener("click", function (e) {
  // 이벤트 버블링 방지 btn-container 클래스가 포함되어 있는 경우에는 그냥 return해버림
  if (e.target.classList.contains("btn-container")) {
    console.log("btn-container div를 클릭함");
    return;
  }
  // 그 외의 button 요소를 클릭했을 때에는 아래와 같이 반응함
  if (e.target.classList.contains("page-btn")) {
    // console.log("페이지 번호를 클릭함");
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains("next-btn")) {
    // console.log("next 버튼을 클릭함");
    index++; // index 1 증가시킴
    if (index > pages.length - 1) {
      // index가 배열의 길이를 초과하면 다시 0으로 설정한다
      index = 0;
    }
  }
  if (e.target.classList.contains("prev-btn")) {
    // console.log("prev 버튼을 클릭함");
    index--;
    if (index < 0) {
      // index가 0보다 작아지면 다시 마지막 페이지로 돌아간다
      index = pages.length - 1;
    }
  }
  // 페이지가 변경되었으므로 UI 갱신을 위해 함수 호출
  setupUI();
});

// 페이지 로드 시 초기화 함수 호출
window.addEventListener("load", init);
