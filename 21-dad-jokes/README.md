## Dad Jokes Project

### fetch

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

### Promise란?

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
