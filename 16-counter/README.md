# counter

## Check Point

- OOP
- throw
- new Function

### throw

```js
throw error; // Throws a previously defined value (e.g. within a catch block)
throw new Error("Required"); // Throws a new Error object
```

- 예상한 것과 다른 결과값이 나오는 경우 에러 처리
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
- https://velog.io/@nemo/throw

### new Function

- 인수, 함수 본문으로 구성됨
- 기존에 사용하던 방법과 new Function을 사용해 함수를 만드는 방법의 가장 큰 차이는 런타임에 받은 문자열을 사용해 함수를 만들 수 있다는 점입니다.
- https://ko.javascript.info/new-function

### bind

- 이벤트 핸들러 내부의 this는 기본적으로 이벤트 대상을 가리킨다. 여기에서 bind를 하지 않는다면 increase, decrease, reset 메소드 내부의 this는 각각의 버튼 요소를 가리키게 된다.
- 그러나 bind 한 메소드들은 어디에서 호출되든지 항상 Counter 인스턴스를 가리키게 된다.
- 이렇게 메소드가 어디에서 호출되든 this가 원하는 객체를 가리키도록 할 수 있다.

### prototype

- JS는 프로토타입 기반 언어로, 모든 객체는 메소드의 속성을 상속받기 위한 템플릿으로써 프로토타입 객체를 가진다.
- `Counter.prototype.increase`을 예로 들자면
  - `Counter.prototype`은 Counter 함수의 프로토타입 객체를 가리킨다.
  - `increase` 는 그 프로토타입 객체에 추가되는 메소드의 이름
  - 이렇게 정의된 메소드는 Counter 함수로 생성된 모든 객체에서 사용 가능.
- 즉 클래스 기반 언어에서 보이는 상속과 유사한 기능을 제공하는 것!
