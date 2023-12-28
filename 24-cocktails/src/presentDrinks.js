// 초기 페이지 로드 시, 검색 폼에서 입력이 발생할 때 사용됨
import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

// 데이터들 가져와서 화면에 표시하는 역할
const presentDrinks = async (url) => {
  // fetch drinks  데이터 가져옴
  const data = await fetchDrinks(url);

  // display drinks 위에서 fetch한 걸 화면에 표시하고 section에 저장
  const section = await displayDrinks(data);
  // section에 저장되는 건 displayDrinks에서 반환한 문자열들 HTML 꾸러미

  // setDrink으로 각 drink 이벤트 설정.
  // 만약 section이 존재한다면! null이 아니라면!
  if (section) {
    setDrink(section);
    // 드링크 선택시마다 해당 드링크 ID를 로컬 스토리지에 저장
  }
};

export default presentDrinks;
