import presentDrinks from "./src/presentDrinks.js";
import "./src/searchForm.js";

// cocktailDB API
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

// 페이지 로드 시 presentDrinks(URL) 실행
window.addEventListener("DOMContentLoaded", () => {
  // API에서 drink 정보 가져와서 표시
  presentDrinks(URL);
});
