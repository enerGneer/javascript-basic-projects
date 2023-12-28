// import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";

// 선택한 drink의 세부 정보 받아와서 HTML 렌더링 표시
const displayDrink = (data) => {
  // hide loading
  // hideLoading();

  // API에서 받아온 정보 data 에서 drinks 목록 배열 중 첫번째 정보를 추출하여 drink 변수에 할당
  const drink = data.drinks[0];

  // 정보에서 필요한 속성들 추출
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  const list = [drink.strIngredient1, drink.strIngredient2, drink.strIngredient3, drink.strIngredient4, drink.strIngredient5];

  // 화면에서 각 요소에 해당 정보 표시
  const img = get(".drink-img");
  const drinkName = get(".drink-name");
  const description = get(".drink-desc");
  const ingredients = get(".drink-ingredients");

  img.src = image;
  document.title = name;
  drinkName.textContent = name;
  description.textContent = desc;
  ingredients.innerHTML = list
    .map((item) => {
      if (!item) return;
      return `<li><i class="far fa-check-square"></i>${item}</li>`;
    })
    .join("");
};

export default displayDrink;
