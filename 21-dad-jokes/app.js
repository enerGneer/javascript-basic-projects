const url = "https://icanhazdadjoke.com/";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

// btn 요소 클릭 이벤트 리스너 : 함수 실행
btn.addEventListener("click", () => {
  fetchDadJoke();
});

// 웹사이트에서 조크를 가져온다.
const fetchDadJoke = async () => {
  // 일단 로딩 메시지 표시
  result.textContent = "Loading...";
  try {
    // fetch 함수를 사용하여 데이터 가져온다. 가져온 데이터는 json 형식
    // response로 응답 처리
    const response = await fetch(url, {
      // url을 인자로 받아 해당 url로 HTTP 요청을 보냄. 두번째 인자가 요청의 세부 설정 담고 있음. 여기서는 headers 필드를 통해 HTTP 헤더를 설정함.
      headers: {
        // accept는 클라이언트가 이해할 수 있는 컨텐츠 타입임. 여기서는 json 형식의 데이터 요청함
        Accept: "application/json",
        "User-Agent": "learning app",
        // user-agent는 클라이언트의 애플리케이션 타입 등의 정보
      },
    });
    // await은 promise가 처리될 때까지 기다린 후 결과를 반환함. 따라서 reponse const에는 fetch 함수가 반환한 promise의 결과인 response 객체가 저장됨

    // response.ok는 응답의 상태코드가 성공상태 200-299인지를 나타냄
    if (!response.ok) {
      // 성공이 아니라면 에러 발생시킴
      throw new Error(" error");
    }

    // 가져온 데이터는 JSON형식으므로 response.json을 사용하여 JS 객체로 파싱한 promise를 반환함.
    // await 키워드로 이 promise가 처리될 때까지 기다린다음 변수를 data에 저장
    const data = await response.json();
    // data에 웹사이트에서 반환한 JSON 데이터가 저장됨

    // 그 다음 joke 텍스트를 화면에 표시
    result.textContent = data.joke;

    // 에러처리
  } catch (error) {
    // 오류가 발생하면 콘솔에 오류 메시지 출력 + 화면에 텍스트 출력
    console.log(error.message);
    result.textContent = "There was an error...";
  }
};

// 로드될 때 한번 실행 > 웹 페이지 로드시마다 실행되는 것
fetchDadJoke();
