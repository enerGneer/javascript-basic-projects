import fetchDrinks from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";
import { hideLoading } from "./src/toggleLoading.js";

// 로컬 스토리지에서 drink ID 가져옴
const presentDrink = async () => {
  // 로컬 스토리지에서 drink 키의 키값 가져옴
  const id = localStorage.getItem("drink");

  if (!id) {
    // ID가 없다면 index.html로 리디렉션
    window.location.replace("index.html");
  } else {
    // 존재하면 해당 ID 사용하여 API에서 정보 가져옴
    const drink = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    // display 함수 호출하여 해당 drink 표시
    hideLoading();
    displayDrink(drink);
  }
};

// 페이지 로드 시 presentDrink 실행
window.addEventListener("DOMContentLoaded", presentDrink);
