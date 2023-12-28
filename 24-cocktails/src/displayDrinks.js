import get from "./getElement.js";

// default가 아니라 중괄호를 사용하여 명시적으로 가져온 것임
import { hideLoading } from "./toggleLoading.js";

// drink 목록을 받아와 HTML로 렌더링하여 화면에 표시함
const displayDrinks = ({ drinks }) => {
  const section = get(".section-center");
  const title = get(".title");

  // drink가 없는 경우
  if (!drinks) {
    // 오류 메시지를 표시하고 로딩 상태를 hide함
    hideLoading();
    title.textContent = "sorry, no drinks matched your search";
    // drink 표시 섹션의 HTML 내용을 지운다
    section.innerHTML = null;
    return;
  }

  // drink가 있는 경우
  const newDrinks = drinks
    .map((drink) => {
      // 객체 분해
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

      // 각 drink에 대한 HTML 코드를 생성하여 문자열로 반환
      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join("");

  // 로딩 표시 hide, 제목 초기화, drink 목룍 화면에 표시
  hideLoading();
  title.textContent = "";
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
