# Grocery Bud

## Check Point

- CRUD
- DOMContentLoaded
- new Date()
- createAttribute()
- setAttribute()
- appendChild()
- filter()
- map()

### map

- JavaScript 배열에서 사용되는 내장 함수 중 하나로, 각 배열 요소에 대해 주어진 함수를 호출하고 그 결과로 새로운 배열을 생성
- 기존 배열의 각 요소를 변환하여 새로운 배열을 만들 때 유용하게 활용됨

```js
const newArray = array.map(function (element, index, array) {
  // 변환 로직
  return transformedElement;
});
```

- array: map 메서드를 호출한 배열 자체입니다.
- element: 배열의 각 요소에 대한 참조입니다.
- index: 배열의 현재 요소의 인덱스입니다.
- array: map을 호출한 배열 자체를 나타냅니다.

- map 메서드는 주어진 콜백 함수를 배열의 각 요소에 대해 한 번씩 순회하며 실행하고, 각 요소에 대한 변환된 값을 가진 새로운 배열을 반환합니다. map 메서드는 원본 배열을 변경하지 않으며, 새로운 배열을 생성합니다.

```js
const numbers = [1, 2, 3, 4, 5];

// 각 요소를 제곱하여 새로운 배열 생성
const squaredNumbers = numbers.map(function (number) {
  return number * number;
});

console.log(squaredNumbers); // 출력: [1, 4, 9, 16, 25]
```
