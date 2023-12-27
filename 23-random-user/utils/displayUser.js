// getElement를 get이라는 이름으로 가져와서 사용함
import get from "./getElement.js";
import removeActive from "./removeActive.js";

// get 을 이용하여 선택자가 유효하지 않을 경우를 대비하여 오류 처리 수행
const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btns = [...document.querySelectorAll(".icon")];
// icon nodelist를 배열로 가져옴

// 사용자 정보를 받아와 화면에 표시하는 함수
const displayUser = (person) => {
  // 사용자 정보를 화면 요소에 할당
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is`;

  // 기존에 활성화된 버튼의 클래스를 제거
  removeActive(btns);

  // 첫 번째 버튼을 제외한 나머지 버튼에서 'active' 클래스 제거
  btns[0].classList.remove("active");

  // 각 버튼에 클릭 이벤트를 추가하고, 클릭 시 해당 정보를 표시하도록 설정
  btns.forEach((btn) => {
    // label 변수에 데이터속성 data label을 저장
    const label = btn.dataset.label;
    // 버튼 클릭 이벤트 발생 시
    btn.addEventListener("click", () => {
      // label값ㅇ르 가져와 넣어줌
      title.textContent = `My ${label} is`;
      value.textContent = person[label];

      // 기존에 활성화된 버튼의 클래스를 제거
      removeActive(btns);

      // 현재 클릭된 버튼에 'active' 클래스 추가
      btn.classList.add("active");
    });
  });
};

export default displayUser;
