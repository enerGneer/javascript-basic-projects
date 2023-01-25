# Counter

## Check Point

### target

```js
const target = event.currentTarget.classList;
```

현재 타겟을 알아볼 수 있다. NodeList중 classList를 확인 가능하다.

```
target.contains("increase")
```

이런 식으로 포함하고 있는지 확인도 가능하다

### forEach

```js
mySet.forEach(callback[, thisArg])
```

callback을 Set에 존재하는 요소에 대해 한 번씩 실행한다. 딱히 값을 반환하지는 않는다.

Map과 Array에서 사용하는 forEach()와 동일한 형태를 유지하기위해 세 인수와 함께 호출되나, set은 키 값을 사용하지 않는다.

따라서 아래의 세 값 중 요소 키는 요소 값을 받는다.

1. 요소 값
2. 요소 키
3. 순회 중인 Set 객체

**예제**

```js
function logSetElements(value1, value2, set) {
  console.log("s[" + value1 + "] = " + value2);
}

new Set(["foo", "bar", undefined]).forEach(logSetElements);

// 콘솔 로그:
// "s[foo] = foo"
// "s[bar] = bar"
// "s[undefined] = undefined"
```
