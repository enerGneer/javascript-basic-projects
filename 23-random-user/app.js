import get from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";

// getElement에서 가져온 get 함수를 사용하여 btn에 할당
const btn = get(".btn");

// 사용자 정보를 가져와 화면에 표시한다 (비동기로)
const showUser = async () => {
  // get user from api. 다 가져올때까지 기다리기 fetchUser에서 가져옴
  // API에서 가져온 랜덤 유저 정보를 객체로 구성하여 person에 저장
  const person = await getUser();

  // display user
  // 다 가져오면 displayUser에 person 보내기
  displayUser(person);
};

// 페이지 로드시, btn 클릭 시 showUser 실행
window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
