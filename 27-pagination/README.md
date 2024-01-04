# pagination

## 어떤 과정으로 페이지네이션을 구현하였는가

데이터 가져오기: fetchFollowers.js 파일에서 fetchFollowers 함수를 사용하여 GitHub API를 통해 팔로워 데이터를 가져옵니다.

페이지네이션 처리: paginate.js 파일에서는 받아온 팔로워 데이터를 특정 개수의 항목으로 나누어 여러 페이지로 구성합니다. 이것이 페이지네이션의 핵심 원리입니다. paginate 함수는 배열을 받아 페이지로 나눈 배열을 반환합니다.

UI 업데이트: displayFollowers.js 파일에서는 받은 팔로워 데이터를 특정 형식으로 HTML에 렌더링하여 표시합니다.

페이지 버튼 생성: displayButtons.js 파일에서는 페이지 버튼을 생성하고, 각 버튼에는 해당 페이지의 데이터를 표시하도록 이벤트 리스너를 설정합니다.

이벤트 리스너 등록: app.js 파일에서는 페이지 버튼 클릭에 대한 이벤트 리스너를 등록하고, 클릭 시 해당 페이지의 데이터를 표시하도록 UI를 업데이트합니다.

## `<script type="module" src="./app.js"></script>`

#### type = module에 대해서

해당 스크립트 파일을 ES6 모듈로 로드한다는 뜻 = 코드를 여러 파일로 나누어 작성하고 가져오는 기능

기본적으로 script 태그로 불러오는 JS파일은 전역 스코프에 영향을 준다.

하지만 type=module 속성을 사용하면 모듈로 취급되어 지역 스코프를 갖게된다.

#### 효용은?

모듈 내부의 변수, 함수, 클래스 등은 기본적으로 외부 스코프에 노출되지 않아 전역 스코프의 오염을 방지할 수 있다.

모듈 단위로 스크립트를 로드하고 내보낼 수 있기 때문에, 코드의 구조를 모듈화하고 유지보수성을 높일 수 있다.

브라우저에서는 자체적으로 모듈 로더를 제공하여 의존성 관리를 용이하게 한다.

#### 모듈 로더란?

브라우저에서는 JavaScript의 모듈 시스템을 지원하기 위해 자체적으로 모듈 로더를 제공합니다. 모듈 로더는 import와 export를 사용하여 모듈 간의 의존성을 관리하고, 각 모듈이 독립적으로 동작할 수 있도록 지원합니다.

예전에는 부수적으로 필요했으나 ES6부터는 모듈 시스템을 공식적으로 지원하기에 별도의 모듈 로더 라이브러리를 사용하지 않아도 된다.

#### 이제와서 알아보는 ES6이란

ES6는 ECMAScript 2015의 줄임말로, JavaScript 언어의 여러 기능을 업데이트하고 확장한 버전입니다. ECMAScript는 JavaScript의 표준을 정의하는 규격이며, ES6는 2015년에 제정된 이 표준의 여섯 번째 버전을 의미합니다.

##### ES6에서 도입된 주요 기능과 개선사항

1. let과 const: var 대신 let과 const를 사용하여 변수를 선언할 수 있습니다. let은 재할당 가능한 변수를 선언하고, const는 재할당이 불가능한 상수를 선언합니다.
2. 화살표 함수 (Arrow Functions): 함수 표현식을 간결하게 만드는 화살표 함수가 도입되었습니다.
3. 템플릿 리터럴 (Template Literals): 문자열을 더 편리하게 작성할 수 있는 템플릿 리터럴이 추가되었습니다.
4. 디폴트 매개변수 (Default Parameters): 함수의 매개변수에 기본값을 설정할 수 있습니다.
5. 클래스 (Classes): 클래스 문법이 도입되어 객체 지향 프로그래밍을 더 쉽게 할 수 있게 되었습니다.
6. 향상된 객체 리터럴 (Enhanced Object Literals): 객체 리터럴에서 메서드를 간결하게 정의하고 속성명 축약을 할 수 있습니다.
7. 모듈 (Modules): 모듈 시스템이 도입되어 코드를 모듈로 분리하고, 의존성을 관리할 수 있습니다.

### DOMContentLoaded vs load

초기화 작업을 수행할 때 모든 DOM이 로드된 상태이고, 외부 리소스의 로딩을 기다리기 싫다면 DOMContentLoaded 이벤트를 사용하는 것이 좋습니다. 그러나 모든 외부 리소스의 로딩이 완료된 시점을 확실히 알아야 하는 경우에는 load 이벤트를 사용합니다.

### Array.from 메서드

유사 배열 객체나 반복 가능한 객체를 배열로 변환하는데 사용되는 메서드

```js
Array.from(arrayLike);
Array.from(arrayLike, mapFn);
Array.from(arrayLike, mapFn, thisArg);
```

arrayLike : 배열로 변환할 순회 가능 or 유사 배열 객체

mapFn : 변형함수라는 뜻. 배열의 모든 요소에 대해 호출할 함수. 요걸 추가하면 배열에 추가하는 모든 값이 이 함수에 먼저 전달되고, mapFn의 반환 값이 대신 배열에 추가된다.

mapFn은 두 개의 인자를 받음. (element, index) element가 아니라 value라고 많이들 하는 것 같다.

element는 배열에서 처리 중인 현재 요소 값 value

index는 배열에서 처리 중인 현재 요소의 인덱스

value말고 index만 필요한 경우가 많아서 생략을 할 때가 있다.

JS에서는 매개변수 를 선언하지 않아도 되기 때문에 걍 (v, i) 해놓고 v에 대해서 아무것도 안해도 됨. 이 경우 비어있다는 걸 명시적으로 나타내기 위해 (\_, i) 라고 하기도 한다.

mapFn는 즉 콜백함수로서의 역할을 함

#### 여기서 콜백 복습

콜백 함수의 일반적인 특징:

다른 함수에 전달됨: Array.from에게 mapFn이라는 이름의 매개변수로 전달됩니다.
특정한 동작 정의: mapFn은 배열의 각 요소에 대해 수행할 동작을 정의합니다.
호출 시점은 외부 함수에 의존: Array.from이 mapFn을 언제 호출할지 결정하며, 배열의 각 요소에 대해 호출됩니다.

```js
// 문자열을 배열로 변환하기
Array.from("foo"); // ["f", "o", "o"]

// set을 배열로 변환하기
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set); // ["foo", "bar", "baz"]

// 배열 형태를 가진 객체를 배열로 변환
function f() {
  return Array.from(arguments);
}
f(1, 2, 3); // [1, 2, 3]

// 화살표 함수를 map 함수로 사용하여 요소 조작
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]
```

length:5로 길이가 5인 배열을 생성하고, 배열의 각 요소를 해당 요소의 인덱스로 채우는 예제

```js
// 숫자 시퀀스 생성하기
// 배열의 각 위치가 `undefined`로 초기화되므로
// 아래 'v'의 값은 `undefined`가 됩니다.
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
```

`{ length: 5 }` : 이 부분은 {} 객체를 만들고, 그 안에 length 속성을 5로 설정한 것입니다. 이것은 유사 배열 객체로 간주됩니다. 여기서 length 속성이 있는 객체는 Array.from에서 배열의 길이를 지정하는 용도로 사용될 수 있습니다.

`(v, i) => i` 두 번째 매개변수로 전달된 화살표 함수는 배열의 각 요소에 대해 호출되며, 각 요소의 값을 조작하는데 사용됩니다. 이 함수는 v (value)와 i (index)를 매개변수로 받습니다. 여기서는 간단히 i를 반환하여 각 요소를 해당 요소의 인덱스로 채우도록 합니다.

근데 여기서 실제로 value를 사용하지 않아도 되는데.. 자바스크립트에서는 매개변수를 선언하지 않아도 된다. "여기에 있지만 사용하지 않을 것이다"는 의미 전달 가능. `(_, i)` 코드를 이렇게 작성할 수도 있다. 사용하지 않는 매개변수를 나타낼 때 `_` 을 사용하기 때문!

`Array.from(...)` 이제 Array.from 메서드를 사용하여 유사 배열 객체를 배열로 변환합니다. 이때, 새로운 배열의 각 요소는 전달된 함수에 의해 결정됩니다. 여기서는 인덱스가 각 요소의 값이 됩니다.

```js
// map으로 배열 만들기
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from

#### 그럼 여기서는 어떻게 사용되었는가

```js
const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
  const start = index * itemsPerPage;
  return followers.slice(start, start + itemsPerPage);
});
```

- `length : numberOfPages` : 새 배열의 길이를 numberOfPages로 설정한다는 뜻 (페이지의 수)

- `(_, index)` : Array.from의 두 번째 인수는 각 요소에 대해 호출될 콜백 함수. 여기서 `_`는 사용하지 않는 매개변수이고, index는 현재 요소의 인덱스. 팔로워의 배열을 생성할 때 각 팔로워에 특정한 값이 필요하지 않기 때문에 value를 사용하지 않음.

#### slice

배열의 일부분을 추출하여 새로운 배열을 반환하는데 사용된다.

`followers.slice(start, start + itemsPerPage)`는 followers 배열에서 start부터 start + itemsPerPage - 1까지의 부분 배열을 추출한다.

즉, 현재 페이지에서 표시될 팔로워들의 부분 배열을 반환하는 것이다.

slice(시작지점, 몇개인지) 라고 생각하면 편하다! 시작지점, 시작지점부터 추출할 개수

#### 예를 들어 전체 팔로워 배열이 다음과 같다고 가정해보자

```js
const allFollowers = [
  "follower1",
  "follower2",
  "follower3",
  "follower4",
  "follower5",
  "follower6",
  "follower7",
  "follower8",
  "follower9",
  "follower10",
  "follower11",
  "follower12",
  "follower13",
  "follower14",
  "follower15",
  // ... (총 100명의 팔로워가 있다고 가정)
];
```

그걸 paginate 함수를 사용하여 페이지별로 나눠진 팔로워 배열을 생성한다면

```js
const itemsPerPage = 5; // 한 페이지당 5명의 팔로워 표시
const numberOfPages = Math.ceil(allFollowers.length / itemsPerPage);

const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
  const start = index * itemsPerPage;
  return allFollowers.slice(start, start + itemsPerPage);
});

console.log(newFollowers);
```

아래와 같은 console log 결과를 얻게 된다

```js
[
  ["follower1", "follower2", "follower3", "follower4", "follower5"],
  ["follower6", "follower7", "follower8", "follower9", "follower10"],
  ["follower11", "follower12", "follower13", "follower14", "follower15"],
  // ... (총 20개의 페이지가 있다고 가정)
];
```

### map도 두 인수 받음

```js
let btns = pages.map((_, pageIndex) => {
  return `<button class="page-btn ${activeIndex === pageIndex ? "active-btn" : "null "}" data-index="${pageIndex}">
    ${pageIndex + 1}
    </button>`;
});
```

첫번째 매개변수는 현재 순회중인 배열 요소 참조지만 사용하지 않을 거라서 언더스코어로 표시함.

두번째 매개변수는 현재 순회중인 배열 요소의 인덱스임.

### 템플릿 리터럴 안에는 JS의 모든 유효한 표현식을 사용할 수 있다

`${activeIndex === pageIndex ? "active-btn" : ""}`

현재 페이지가 active인지 확인하고 참이면 active 추가함. 아니면 "" 빈문자열 삽입

### 배열에 요소 추가

#### 맨 앞에 추가하려면 unshift

```js
const arr = [2, 3, 4];
arr.unshift(1); // 배열의 맨 앞에 1을 추가
console.log(arr); // 출력: [1, 2, 3, 4]
```

#### 맨 뒤에 추가하려면 push

```js
const arr = [1, 2, 3];
arr.push(4); // 배열의 맨 뒤에 4를 추가
console.log(arr); // 출력: [1, 2, 3, 4]
```

### 이벤트 버블링 방지

이벤트 버블링(Event Bubbling)은 HTML 요소에서 발생한 이벤트가 해당 요소의 조상 요소로 계속해서 전파되는 현상. 이벤트가 발생한 요소 이외의 상위 요소들도 이벤트를 감지하고 반응할 수 있게 하는 메커니즘.

이벤트 버블링은 경우에 따라서는 유용할 수 있지만, 때로는 의도치 않은 동작을 일으킬 수도 있습니다. 특히, 특정 요소에 이벤트 리스너를 등록했을 때, 그 요소의 상위 요소에도 동일한 이벤트가 전달되면서 중복된 동작이 발생할 수 있습니다.

`if (e.target.classList.contains("btn-container")) return;`

페이지 번호를 클릭하면 해당 버튼의 이벤트가 발생한 후, btn-container의 클릭 이벤트도 동작하여 페이지 이동 등의 처리가 중복으로 일어나게 된다. 이는 버블링이 발생하여 하위 요소에서 상위 요소로 이벤트가 전파되기 때문!

이벤트 중복 발생: 페이지 번호를 클릭할 때 페이지 이동 등의 처리를 하는 함수가 두 번 호출될 수 있습니다. 첫 번째 호출은 페이지 번호를 클릭한 버튼에서, 두 번째 호출은 해당 버튼의 부모인 btn-container에서 발생할 것입니다.
