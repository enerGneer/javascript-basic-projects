# Menu

## Check Point

- 배열
- 객체
- forEach()
- DOMContentLoaded
- map, reduce, filter
- innerHTML
- includes 메서드

## array

### `Array.prototype.includes()`

`includes()` 메서드는 배열이 특정 요소를 포함하고 있는지 판별한다.

불리언으로 반환한다.

### `Array.prototype.map()`

`map()` 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.

### `Array.prototype.reduce()`

`reduce()` 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환한다.

배열을 순회하면서 return 한 값들을 accumulator, 즉 계속해서 전달받아서 사용할 수 있다. accumulator 를 어떻게 활용하냐에 따라 최종적인 return 값은 string, integer 가 될 수도, array 나 object 가 될 수도 있다.

#### `arr.reduce(callback[, initialValue])`

- callback : 배열의 각 요소에 대해 실행할 함수
- initialValue : 초기값! 이것이 reduce의 특징이다.
  - callback의 최초 호출에서 첫 번째 인수에 제공하는 값.
  - 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용한다.
  - 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생한다.

아래와 같이 누가 몇 번 나왔는지 셀 수도 있다!

```js
var votes = ["kim", "hong", "lee", "hong", "lee", "lee", "hong"];
var reducer = function (accumulator, value, index, array) {
  if (accumulator.hasOwnProperty(value)) {
    accumulator[val] = accumulator[val] + 1;
  } else {
    accumulator[val] = 1;
  }
  return accumulator;
};
var initialValue = {};
var result = votes.reduce(reducer, initialValue);
console.log(result); // { kim: 1, hong: 3, lee: 3 }
```

여기에서는 중복없이 카테고리를 만들어주는 용도로 사용했다.

- 우선 오브젝트 배열인 menu에 reduce 사용
- reduce 내부에서 호출한 함수의 인자에는 menu의 item이 들어갔다. values는 임의의 변수.
-

```js
// categories라는 array를 reduce로 만든다
const categories = menu.reduce(
  // reduce의 첫번째 인자인 함수 reducer
  function (values, item) {
    // 초기값은 reduce의 두번째 인자로 받아온 ["all"] 배열.
    // 지역변수로 설정한 values 배열과 menu 오브젝트의 항목인 item.
    // item을 하나씩 순회한다.
    if (!values.includes(item.category)) {
      // 만약 values 배열 안의 값에 현재 순회중인 항목의 category값이 포함되어있지 않으면 해당 배열에 push한다
      values.push(item.category);
      // push() 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환한다.
    }
    return values;
    // values 배열을 리턴하는 걸 반복하여 reduce 순회 후 categories 배열에 최종값을 넣게 된다
  },
  // reduce의 두번째 인자인 초기값, "all" 만 들어가있는 array를 주었다.
  ["all"]
);
```

### `Array.prototype.filter()`

`filter()` 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.

말 그대로 필터의 역할!

#### MDN의 예제

'6글자 초과인 것만'이라는 조건을 만족하는 요소를 모아 result라는 새로운 배열로 반환했다.

```js
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```

---

### REF

- MDN
- [map, reduce, filter를 유용하게 활용하는 15가지 방법](https://dongmin-jang.medium.com/javascript-15%EA%B0%80%EC%A7%80-%EC%9C%A0%EC%9A%A9%ED%95%9C-map-reduce-filter-bfbc74f0debd)
- [자바스크립트 배열 메서드 3, reduce 100% 활용법](https://medium.com/@hongkevin/js-3-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4-%EB%A9%94%EC%84%9C%EB%93%9C-reduce-100-%ED%99%9C%EC%9A%A9%EB%B2%95-feat-egghead-io-97c679857ece)
  - flattenMap의 배열을 순회하면서 배열의 값으로 들어있는 object 의 key 존재여부를 확인하고, unique 한 “cast 를 key 로 갖는 배열의 값들”을 최종적으로 return 하는 로직.
  - 배열에 있는 값들을 순회하면서 최종적으로 각각의 값들이 몇 번 나오는지 count 만 할 수도 있다!
