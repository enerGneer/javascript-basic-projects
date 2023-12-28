import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = get(".search-form");
const input = get('[name="drink"]');

// keyup으로 입력값이 변경되는 이벤트 리스너
form.addEventListener("keyup", function (e) {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  // 입력값이 변경되면 presentDrinks 함수 호출하여 해당하는 drink 표시해줌
  presentDrinks(`${baseURL}${value}`);
});
