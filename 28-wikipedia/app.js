const url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

const formDOM = document.querySelector(".form");
const inputDOM = document.querySelector(".form-input");
const resultsDOM = document.querySelector(".results");

formDOM.addEventListener("submit", (e) => {
  e.preventDefault(); // 폼 제출 기본 동작 막기

  // 입력 상자에서 검색어 가져오기
  const value = inputDOM.value;

  // 검색어가 비어있는 경우
  if (!value) {
    // 오류 메시지 표시
    resultsDOM.innerHTML = '<div class="error"> please enter valid search term</div>';
    return; // 함수 종료
  } else {
    // 검색어가 있는 경우, fetchPages 함수 호출하여 Wikipedia API에서 데이터 가져오기
    fetchPages(value);
  }
});

// Wikipedia API를 통해 검색 결과 가져오는 함수
const fetchPages = async (searchValue) => {
  // 결과 로딩 중임을 나타내는 메시지 표시
  resultsDOM.innerHTML = '<div class="loading"></div>';

  try {
    // Wikipedia API로 데이터 요청하여 응답 받기
    const response = await fetch(`${url}${searchValue}`);
    // 응답 데이터를 JSON 형식으로 파싱
    const data = await response.json();
    // 검색 결과 추출
    const results = data.query.search;

    // 검색 결과가 없는 경우
    if (results.length < 1) {
      // 오류 메시지 표시
      resultsDOM.innerHTML = '<div class="error">no matching results. Please try again</div>';
      return; // 함수 종료
    }

    // 검색 결과가 있는 경우, renderResults 함수 호출하여 결과 표시
    renderResults(results);
  } catch (error) {
    // 오류 발생 시 오류 메시지 표시
    resultsDOM.innerHTML = '<div class="error"> there was an error...</div>';
  }
};

// 검색 결과를 화면에 표시하는 함수
const renderResults = (list) => {
  // 검색 결과 목록을 HTML로 변환하여 결과 표시 영역에 삽입
  const cardsList = list
    .map((item) => {
      // 각 검색 결과를 제목, 요약 텍스트, 페이지 링크로 구성된 HTML 문자열로 변환
      const { title, snippet, pageid } = item;
      return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
            <h4>${title}</h4>
            <p>
              ${snippet}
            </p>
          </a>`;
    })
    .join(""); // 배열을 문자열로 결합

  // 결과 표시 영역에 검색 결과를 표시
  resultsDOM.innerHTML = `<div class="articles">
          ${cardsList}
        </div>`;
};
