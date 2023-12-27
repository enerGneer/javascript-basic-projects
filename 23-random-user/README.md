# random-user

### 순서

- app.js 로드 시 비동기 작업 수행하는 동안 이벤트 리스너들이 실행됨
- showUser 함수 내에서 비동기적인 작업이 이루어짐
- getUser 함수가 호출되어 무작이 사용자 정보를 가져옴. 이게 완료되면 가져온 사용자 정보를 이용하여 displayUser 호출 -> 화면에 사용자 정보 표시

#### showUser 함수 내에서 이루어지는 비동기적 작업

- 페이지 로드 시 또는 "random user" 버튼 클릭 시, showUser 함수가 실행됨.
- showUser 함수에서는 getUser 함수를 호출하여 API에서 무작위 사용자 정보를 가져옴.
- getUser 함수에서는 해당 정보를 객체로 구성하여 반환함.
- 반환된 사용자 정보는 person 변수에 할당됨.
- displayUser(person) 코드에서는 person 변수에 담긴 사용자 정보를 화면에 표시하는 displayUser 함수가 호출됨.

### import export

- default는 한개의 값만 내보낼 수 있다 (default가 아닌 건 중괄호 사용하여 여러 개의 값 내보낼 수 있음)

```js
// 모듈에서 기본적으로 내보내기
const myFunction = () => {
  /* ... */
};
export default myFunction;
```

```js
// 다른 파일에서 가져오기 (가져올 이름을 개발자가 정할 수 있음)
import customName from "./module.js";
```

- 여기서 default와 안 붙은 것의 차이가 궁금해짐
- 여기서는 무조건 같은 이름으로 가져와야 한대

```js
// 모듈에서 명시적으로 내보내기
export const func1 = () => {
  /* ... */
};
export const func2 = () => {
  /* ... */
};
```

```js
// 다른 파일에서 가져오기
import { func1, func2 } from "./module.js";
```

### getUser function

받아온 API를 가공해서 아래와 같은 user 객체로 만든다

```js
{
  image: "https://randomuser.me/api/portraits/men/53.jpg",
  phone: "01-34-28-80-64",
  email: "martin.lambert@example.com",
  password: "jayson",
  age: 68,
  street: "3440 Rue Laure-Diebold",
  name: "Martin Lambert"
}

```

### `const btns = [...document.querySelectorAll(".icon")];`

- `document.querySelectorAll(".icon")`는 CSS 선택자 `.icon`에 해당하는 모든 요소를 찾아 NodeList로 반환
- NodeList
  - 배열과 유사하게 생겼지만 배열은 아님. 따라서 메서드 사용 불가
    - 배열처럼 다루려면 배열로 변환 필요
- 스프레드 연산자(...)는 배열 또는 이터러블 객체를 개별 요소로 분리하고 새로운 배열을 생성

일반적으로 그냥 `const btns = document.querySelectorAll(".icon")` 이렇게 많이 써 왔는데 여기에서 스프레드를 쓴 이유는 배열로 변환하여 배열 메서드를 사용하기 위함.

NodeList에 내장된 메서드(forEach 등)만으로 충분하다면 `const btns = document.querySelectorAll(".icon")` 이걸로 됨.

`const btns = document.querySelectorAll(".icon")` 이것은 유사 배열 객체고 그냥 nodelist인 채로 있음

`const btns = [...document.querySelectorAll(".icon")];` 이것은 완전히 배열 객체가 되었다.

### 콜백 함수

- 콜백 함수(callback function)는 다른 함수에 인자로 전달되어 **특정 상황이나 조건이 발생했을 때 실행**되는 함수
- 주로 비동기적인 작업, 이벤트 처리, 타이머 등에서 사용된다.

- 특징
  - 다른 함수에 전달됨 (매개변수로)
  - 이벤트가 발생했을 때 호출되는 게 일반적임
  - 비동기 작업의 완료 또는 에러 핸들링을 위해 사용됨

```js
const showUser = async () => {
  const person = await getUser();

  displayUser(person); // 요게 콜백함수
};
```

- showUser 함수 내부의 displayUser가 콜백함수로 사용되고 있는데
- getUser 함수는 비동기 함수이며 await 키워드를 사용하여 비동기적으로 데이터를 받아옵니다.
- getUser 함수가 데이터를 성공적으로 받아오면 해당 데이터를 콜백 함수로 전달하여 displayUser 함수를 호출합니다.
- displayUser 함수가 호출되면서 받아온 데이터를 사용하여 화면에 사용자 정보를 표시합니다.

### DOMContentLoaded의 효용

DOMContentLoaded 이벤트 리스너를 사용하는 이유 중 하나는 페이지의 HTML 문서가 완전히 로드되었을 때만 스크립트 코드를 실행하기 위해서입니다. HTML 문서의 로딩이 완료되지 않은 상태에서 JavaScript 코드가 실행되면 DOM 요소에 대한 조작이나 접근이 불안정할 수 있습니다.

DOMContentLoaded 이벤트는 HTML 문서의 모든 요소가 로드되고 파싱되었을 때 발생하는데, 이 시점에서는 안전하게 JavaScript 코드를 실행할 수 있습니다. 따라서 초기화 코드나 초기 데이터 로딩과 같은 작업들을 DOMContentLoaded 이벤트 핸들러 내에서 수행하면, 페이지 로딩 과정에서 예상치 못한 문제를 방지할 수 있습니다.

만약 스크립트 코드를 페이지의 <head> 부분에 두거나, HTML 문서의 맨 아래에 <body> 끝에 두고 DOMContentLoaded 이벤트 리스너를 사용하지 않으면, 스크립트가 실행되는 시점에서 DOM 요소들이 아직 로드되지 않았을 가능성이 있습니다. 이는 예기치 않은 동작을 초래할 수 있습니다.

따라서 DOMContentLoaded 이벤트 리스너를 사용함으로써 페이지의 모든 요소가 로드된 후에 안전하게 스크립트 코드를 실행할 수 있도록 보장할 수 있습니다.

- 아 맞다 defer도 있었음
- 만약 <script> 태그에 defer 속성이 추가되어 있다면, 해당 스크립트는 HTML 문서 파싱이 완료된 후에 순서를 유지한 채로 실행됩니다.

### 파일 분리의 효용

JavaScript 코드를 여러 파일로 나누는 것은 코드를 모듈화하고 유지보수성을 높이기 위한 일반적인 개발 관행입니다. 코드를 각각의 파일로 분리하는 이점은 다음과 같습니다:

모듈화 (Modularity): 각 파일은 특정 기능 또는 역할을 담당하므로 코드를 논리적인 단위로 분리할 수 있습니다. 이는 코드의 가독성을 높이고, 각 모듈을 독립적으로 개발하고 테스트할 수 있도록 돕습니다.

재사용성 (Reusability): 모듈로 분리된 코드는 다른 프로젝트나 다른 부분에서 쉽게 재사용될 수 있습니다. 필요한 기능이나 모듈을 적절히 가져와서 사용할 수 있습니다.

유지보수성 (Maintainability): 코드가 모듈 단위로 분리되면, 특정 모듈의 수정이나 업데이트가 다른 부분에 영향을 미치지 않도록 하는 것이 더 쉬워집니다. 또한, 수정이나 버그 수정이 필요한 경우 해당 모듈만 수정하면 됩니다.

가독성 (Readability): 각 파일이 특정 기능이나 역할을 수행하므로, 코드의 구조가 명확해지고 가독성이 향상됩니다. 특정 기능을 찾거나 이해하기 쉬워집니다.

코드 관리 (Code Organization): 큰 프로젝트의 경우 파일 단위로 코드를 나누면 전체적인 프로젝트의 구조를 쉽게 파악할 수 있습니다.

### 화살표 함수 익히기

```js
// 화살표 함수
items.forEach((btn) => btn.classList.remove("active"));
```

```js
// 일반 함수
items.forEach(function (item) {
  item.classList.remove("active");
});
```

즉 따로 떼놓고 보면

```js
(btn) => btn.classList.remove("active");
```

```js
function (item) {
  item.classList.remove("active");
}
```

async 부분

```js
// 기존의 화살표 함수
const getUser = async () => {
  // 함수 내용
};

// 일반 함수로 변경
async function getUser() {
  // 함수 내용
}
```

화살표랑 일반 함수의 분기점은 역시 this다!

일반적으로 간결한 작업은 화살표, 복잡한 동작이 필요하면 일반 함수
