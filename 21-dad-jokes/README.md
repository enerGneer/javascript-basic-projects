## Dad Jokes Project

### AJAX(Asynchronous JavaScript and XML)

- AJAX는 웹 페이지를 새로 고침하지 않고도 서버로부터 데이터를 비동기적으로 가져오는 기술

- 여기에서는 fetchDadJoke 함수를 사용하여 비동기 요청을 보낸다
  - fetch 함수로 ‘https://icanhazdadjoke.com/’ URL로 비동기 요청 GET을 보낸다
  - 요청 헤더에는 JSON 형식의 데이터를 달라는 것과 user agent 정보가 들어있다
  - 응답 처리 : response.ok는 HTTP 응답의 상태 코드가 성공인지 200~299사이인지 판단한다. 성공적이면 JSON형식의 response 데이터를 가져온다

#### 이 코드에서 알 수 있는 AJAX의 특징

- 비동기 통신

  - fetchDadJoke 함수가 비동기 함수로 정의되어 있음. await 키워드를 사용하여 비동기 작업이 완료될 때까지 기다린다.
  - 비동기적으로 서버에서 데이터를 요청하고, 데이터를 받을 때까지 다른 작업을 계속할 수 있습니다.

- HTTP 요청 보내기:

  - fetch 함수를 사용하여 서버에 HTTP GET 요청을 보낸다.
  - 이때, url 변수에 지정된 주소로 요청한다.

- 응답 처리

  - 서버로부터 받은 응답은 response 객체에 저장된다.
  - response.ok를 통해 응답의 상태 코드가 성공적인지 확인하고, 성공이 아닌 경우 에러를 처리한다.

- JSON 형식 데이터 처리

  - response.json()을 사용하여 서버에서 받은 데이터를 JSON 형식으로 처리한다.

- 동적 업데이트
  - 성공적으로 데이터를 받아오면, 해당 데이터를 사용하여 화면을 동적으로 업데이트한다.
  - 이 코드에서는 dad jokes를 가져와서 화면에 표시한다.

#### fetch

기본 문법

```js
fetch(input[, init])
  .then(response => {
    // 응답 처리
    return response.json(); // 또는 response.text(), response.blob() 등 다양한 메서드 활용 가능
  })
  .then(data => {
    // 처리된 데이터 사용
  })
  .catch(error => {
    // 에러 처리
  });
```

- input: 요청할 리소스의 URL이나 Request 객체입니다.
- init (선택적): 요청의 다양한 옵션을 지정하는 객체입니다. 헤더, 메서드, 모드 등을 설정할 수 있습니다.

```js
const response = await fetch(url, {
  headers: {
    Accept: "application/json",
    "User-Agent": "learning app",
  },
});
```

- 여기서 url이 요청할 리소스의 URL, 두번째 인자로 전달된 객체는 다양한 옵션 설정 (헤더를 JSON으로 지정하고 user-agent를 설정하고)

- fetch함수의 반환 값은 response 객체 = 네트워크 요청 응답.
- 응답을 처리하기 위해 다양한 메서드를 사용할 수 있다 (json(), text(), blob() 등)

- 여기서 fetch 함수는 비동기적으로 동작하므로 .then() 또는 async/await 을 사용하여 응답 데이터 처리하는 게 일반적이다.
- 왜냐하면 JS에서 비동기 코드를 다루려고
- 비동기작업은 시간 걸리는 작업 수행할 때 중요
- 작업 완료될 때까지 기다리지 않고 다른 코드 실행하게 해줌

- 왜 이렇게 해야하는가?
  - 콜백지옥 방지. 콜백함수 계속 중첩하면 콜백지옥
  - 순차적 코드 실행. 비동기 작업 완료 기다릴 수 있다.
  - 오류 처리의 용이성
  - 가독성 향상

#### Promise란?

- 비동기 작업의 최종 완료 또는 실패를 나타내는 객체
- 비동기 작업이 끝날 때까지 결과를 기다리는 것이 아니라, 결과를 제공하겠다는 '약속'을 반환한다는 의미라서 promise라고 한다
- 다음과 같은 세 가지 상태 가짐
  - 대기 pending 로직 미완료
  - 이행 fulfilled 성공적으로 완료하여 결과값 반환
  - 거부 rejected 실패 오류
- fetch 함수는 promise를 반환한다.
  - 서버로부터 응답을 받아오는 작업을 비동기적으로 처리
  - 이행 상태가 되면 then메서드로 처리 결과 값 받을 수 있음
  - 거부 상태가 되면 catch로 오류 처리 가능
  -
- https://joshua1988.github.io/web-development/javascript/promise-for-beginners/

### API

- 웹 API는 웹 서버에서 데이터를 가져오거나 웹 서버에 데이터를 보내는 데 사용되는 인터페이스
- 웹 서비스로부터 데이터를 가져오거나 서버에 데이터를 전송하기 위한 규약

- API 엔드포인트:

  - API 엔드포인트(API Endpoint)는 웹 API에서 특정한 기능이나 리소스에 접근할 수 있도록 제공되는 URL. 각 엔드포인트는 API에서 특정한 작업을 수행하거나, 특정 데이터를 제공하는 역할을 합니다. API 엔드포인트는 일종의 경로 또는 URL 패턴으로 표현되며, 클라이언트는 이 엔드포인트로 HTTP 요청을 보내어 서버의 기능을 이용하거나 데이터를 가져올 수 있다.
  - 코드에서 사용하는 API는 "https://icanhazdadjoke.com/". 이 URL은 아빠 농담을 가져오기 위한 특정 API 엔드포인트를 나타낸다.
  - 일반적으로 다음과 같은 구조를 갖는다
    - https://api.example.com: API 서버의 기본 주소
    - /v1/: API 버전을 나타내는 경로 (옵션)
    - resource: 특정 리소스나 기능을 나타내는 경로
  - API의 문서 또는 스펙에 정의되어 있으며, 클라이언트 개발자들은 이를 참고하여 필요한 데이터를 요청하거나 서버의 기능을 사용할 수 있다.

```bash
https://api.example.com/v1/resource
```

- HTTP 요청:

  - fetch 함수를 사용하여 API에 HTTP GET 요청을 보낸다. 이 요청은 지정된 API 엔드포인트로 가서 데이터를 요청하는 역할을 한다. 쿼리 파라미터를 통해 데이터를 전달한다.
    - GET 요청 : 주로 데이터를 가져오는데 사용되며, 요청이나 데이터를 서버에 보내지 않는다.
    - GET과 POST의 차이 : POST는 서버에 데이터 제출할 때 사용한다 (폼 데이터라든지, JSON으로 데이터를 서버에 보낼 때.)
    - 물론 필요에 따라 fetch로도 POST 요청을 보낼 수는 있다 (이때는 두번째 파라미터에 method를 POST로 지정하면 된다. body로 전송할 데이터도 지정할 수 있다.)

- HTTP 헤더:

  - fetch 함수의 두 번째 매개변수에서 HTTP 헤더를 설정한다. 코드에서는 Accept 헤더를 사용하여 클라이언트가 JSON 형식의 데이터를 원한다고 서버에 알리는 것.
  - 헤더는 HTTP 요청에 추가적인 정보를 포함하는 역할을 한다.
  - 헤더는 특정한 설정이나 요청에 대한 부가적인 정보를 서버에 전달하거나, 서버로부터 받은 응답에 대한 정보를 클라이언트에게 전달할 때 사용된다.
  - 헤더의 역할
    - Content-Type 설정 (데이터의 형식 명시)
      - JSON 데이터 전송 시에는 `application/json` 으로 설정
    - 요청에 대한 인증 정보 전송. 예를 들어, 토큰 기반의 인증에서는 토큰을 헤더에 추가하여 서버에 전달
    - user-agent 정보 전송
    - 쿠키 전송 (세션 유지 등에 사용)
  - 객체 형태로 키-값 쌍으로 지정한다.

- 응답 처리:
  - response.json()
    - fetch 함수 수행된 HTTP response(서버가 전송한 것)의 본문을 JSON 형식으로 파싱한다.
    - 이 메서드는 promise를 return하며 이 promise는 JSON 형식의 데이터가 파싱된 후에 이행resolve 된다.
    - 기본적으로 서버에서 받은 HTTP response는 텍스트나 이진 데이터 형태로 제공되기 때문에 JS에서 사용하려면 JSON 형식으로 변환이 필요하다.
    - 서버에서 JSON 형식 데이터를 줄 때만 사용가능

#### HTML Structure

- div.container
  - button.btn
  - p.result(dummy text)

#### External Data

- the main idea the same, just external data

#### What is an API?

[What is an API?](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/)

- https://course-api.com/javascript-store-products
- get store products

- https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog
- get single store product

- https://randomuser.me/api/
- random user

#### Docs

- important
- search engine
- test in the browser

#### Dad Jokes Docs

- [Dad Jokes](https://icanhazdadjoke.com/api)

- random joke
- https://icanhazdadjoke.com/

#### Select Elements

- select btn, result
- check if both elements selected
- listen for click events

#### FetchDadJoke Function

- create async function
- setup fetch
- set result.textContent = joke

```js
const fetchDadJoke = async () => {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "learning app",
    },
  });

  const data = await response.json();
  result.textContent = data.joke;
};
```

#### Loading

- set result equal to - 'Loading...'

#### Error Handling

- try/catch block
- set result equal to - 'There was an error..'

#### Check Status

- Fetch - only throws an error if cannot resolve
- Error response still a response
- check response.ok property
- throw new Error('Whoops!')
