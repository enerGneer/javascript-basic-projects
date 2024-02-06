const url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

const formDOM = document.querySelector(".form");
const inputDOM = document.querySelector(".form-input");
const resultsDOM = document.querySelector(".results");

formDOM.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = inputDOM.value;
  if (!value) {
    // TODO: 검색어가 없을 때 처리 부분
  } else {
    // TODO: Wikipedia API를 통한 데이터 가져오기
  }
});

// TODO: fetchPages 함수 작성

// TODO: renderResults 함수 작성
