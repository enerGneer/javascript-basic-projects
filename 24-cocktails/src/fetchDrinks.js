import { showLoading } from "./toggleLoading.js";

// API에서 데이터 가져오는 비동기 함수
const fetchDrinks = async (url) => {
  // 로딩 보여주기
  showLoading();

  try {
    // url에서 fetch함
    const response = await fetch(url);
    // json으로
    const data = await response.json();
    // data를 반환
    return data;
  } catch (error) {
    // 에러 시 콘솔로그
    console.log(error);
  }
};

export default fetchDrinks;
