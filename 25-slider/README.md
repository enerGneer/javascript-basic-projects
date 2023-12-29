# Slider

### map

맵에 대해 다시 정리해보자

```js
arr.map(callback(currentValue[, index[, array]])[, thisArg])
```

```js
array.map((currentValue, index, array) => {
  // 작업 수행
});
```

- callback 새로운 배열 요소를 생성하는 함수
  - 콜백 함수에 대해 복습!
  - 함수가 다른 함수에 전달되어 호출되는 경우 "콜백 함수"라고 부르는 경향이 있음.
  - 주로 특정 상황이나 이벤트에 대응하기 위해 다른 함수에 전달되어 실행되는 함수를 강조할 때 사용됨.
  - 비동기 코드에 많이 등장함
  - 특정 상황에서 호출되는데, 예를 들어 이벤트 핸들링, 비동기 작업 완료, 타이머 동작 완료 등과 같은 상황에서 실행됨
  - 즉 .map()은 배열의 각 요소에 대해서 주어진 콜백 함수를 호출하고, 각 콜백함수의 return값을 모아서 새로운 배열을 생성한다. 콜백함수는 배열의 각 요소에 대한 처리를 정의한다.
- currentValue 처리할 현재 요소
- index (선택적) 처리할 현재 요소의 인덱스
- array (선택적) map()을 호출한 배열

### End of array 배열의 끝부분에서 다음 슬라이드를 찾아야 하는 경우

```js
const active = document.querySelector(".active"); // 현재 활성화된 슬라이드
const last = document.querySelector(".last"); // 다음에 오는 슬라이드
let next = active.nextElementSibling; // active의 next sibling 요소를 찾아 next에 할당
if (!next) {
  // next가 없다면 = 마지막 슬라이드라면
  next = container.firstElementChild; // container의 첫번째 자식 요소를 next에 할당 = 첫번째 슬라이드
}
```

next를 결정하는 부분. 현재 active 슬라이드 다음에 올 next 슬라이드를 찾는 것인데, 만약 배열의 끝인 경우에는 next를 뭘로 할거냐에 대한 문제.

여기에서는 다음 슬라이드를 처음으로 돌려준다 (first) 즉 슬라이드가 cycling 되도록 한다. 이렇게 무한한 슬라이드 경험을 제공하는 것!

모든 슬라이드는 HTML상에 기본적으로 렌더링되어 있음. app.js로 동적으로 관리하는 것 뿐이라 firstElementChild를 하면 첫번째 슬라이드를 선택하게 된다!

### firstElementChild

DOM에서 자식 요소 중 첫 번째 요소를 선택할 때 firstElementChild를 사용하는 것이 바람직한데 그 이유는 다음과 같다.

- firstElementChild: 첫 번째 자식 요소를 반환하며, 노드 중에 요소 노드(HTML 태그)만을 고려한다. 따라서 텍스트 노드나 주석 등은 무시한다.

- firstChild: 첫 번째 자식 노드를 반환하며, 이 노드가 요소, 텍스트, 주석 등 모든 종류의 노드일 수 있다.

따라서, 슬라이드와 같이 구조적으로 중요한 HTML 요소를 선택할 때, firstElementChild를 사용하여 명시적으로 요소 노드에 접근하는 것이 코드의 가독성을 높일 수 있다!
