## Products Project

#### Structure (HTML)

- section.products

  - div.title
    - h2(products)
    - div.title-underline
  - div.products-center
    - div.products-container
      - a.single-product href="product.html"
        - img.single-product-img.img
        - footer
          - h5.name (product title)
          - span.price($9.99)

- create product.html
- basic structure

#### Loading and Error

- (CSS Loading Spinner)[https://youtu.be/DqqZEpctZ8w]
- in .products-center
- div.loading
  - 회전 애니메이션으로 로딩 이미지를 만들 수 있다.

```css
.loading {
  width: 6rem;
  height: 6rem;
  border: 5px solid var(--grey-400);
  border-radius: 50%;
  border-top-color: var(--primary-500);
  animation: spinner 0.6s linear infinite;
}
.loading {
  margin: 0 auto;
  margin-top: 4rem;
}
```

- p.error

#### API Docs

- (Course API)[https://course-api.com/]

- (Products)[https://course-api.com/javascript-store-products]

- (Single Product)[https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog]

```js
const url = "https://course-api.com/javascript-store-products";
```

이렇게 가져오고있음

#### Fetch Products 상품 데이터 가져오기 (API에서/JSON)

- select .products-center 컨테이너 선택하기
- fetch products 상품 데이터 가져오기
- log result
- try/catch

```js
const fetchProducts = async () => {
  productsDOM.innerHTML = '<div class="loading"></div>';
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = '<p class="error">there was an error</p>';
  }
};
```

- 위 코드에서 async : 이 함수가 비동기적으로 실행될 것이라고 선언. 즉 promise를 return하고 이 promise는 함수의 실행이 완료될때까지 기다리지 않고 즉시 return된다.
  - promise가 나중에 이행-또는 거부될때까지 결과값을 바로 반환하지 않는다.
  - 예를 들어 promise의 then메서드는 작업이 성공적으로 완료되었을 때 호출되며, 그 시점에서 결과값이 콜백 함수의 매개변수로 전달되는 것이다.
  - 마찬가지로 catch는 작업이 실패했을 때 호출되며, 이 정보가 콜백 함수의 매개변수로 전달된다.
- await : promise가 이행될 때까지 함수의 실행을 일시 중지한다.

  - await을 만나면 해당 작업이 완료될때까지 기다리는 것!

- 만약 async와 await 키워드가 없다면 무슨 일이 일어나는가

  - 코드는 동기적으로 실행된다 = 각 줄의 코드가 순차적으로 실행된다. 한 줄의 코드가 완전히 실행될때까지 다음 코드가 아예 실행되지 않는다.

- 만약 app.js 맨 하단에 console.log("아무말") 이 존재한다고 치자

  - 그것은 fetchProducts 함수가 호출되고 나서 즉시 실행된다. (fetchProducts 함수가 비동기적으로 데이터 가져오는 동안에!) 이는 JavaScript가 비동기 함수를 호출하고 나서 다음 줄의 코드를 즉시 실행하기 때문. 즉 비동기 코드는 순차적으로 실행되지 않는다.
  - console.log("아무말")이 fetchProducts 함수 안의 맨 아래에 있다면, 그것은 fetchProducts 함수가 완료된 후에 실행된다. 앞에 await 이 있어서, 요게 함수의 실행을 일시 중지하고, Promise가 이행될 때까지 기다리기 때문.

- https://velog.io/@khyup0629/javascript-async%EC%99%80-await%EC%9D%98-%EA%B0%9C%EB%85%90%EA%B3%BC-%EC%82%AC%EC%9A%A9%EB%B2%95
- https://joshua1988.github.io/web-development/javascript/js-async-await/
- https://pks2974.medium.com/javascript-%EC%99%80-async-await-111fdad3c20d
- https://chordncode.tistory.com/232

#### Loading and Error

- add loading while fetching 데이터 가져오는 동안 로딩 화면 표시
- add error in catch 에러 발생하면 에러 화면 표시

#### Display Products - Setup

- return data from fetchProducts 가져온 상품 데이터 화면에 표시 (초기)
- create displayProducts(list)
- create start()
- invoke fetchProducts and displayProducts in start
- invoke start

- 순서
  1. fetchProducts 함수에서 비동기적으로 data를 가져온 후, resp.json()을 통해 JSON으로 파싱된 data를 얻습니다.
  2. 이렇게 얻은 data터는 start 함수 내에서 displayProducts 함수에 전달됩니다. (data)
  3. displayProducts 함수는 전달받은 제품 목록(list)을 화면에 표시합니다.

#### Display Products - Complete 상품 데이터 화면에 완전히 표시

- iterate over list 제품 목록 순회하고
- pull out all the values 각 제품의 관련 값을 추출하여
- set productsDOM equal to result 문자열 HTML 생성 (productDOM에 삽입)

#### Single Product 특정 상품의 정보를 화면에 표시

- link styles.css
- a.btn.home-link(back home)
- section.product
- div.product-wrapper
  - img.img
  - div.product-info
    - h3 (title)
    - h5 (company)
    - span (price)
    - div.colors
      - span.product-color
    - p (lorem text)
    - button.btn(add to cart)

#### product.js setup 특정 상품의 데이터 가져와 화면에 표시

- create product.js
- link product.html
- select .product
- get single product url
- setup fetchProduct(),displayProduct(),start()
  - 단일 제품 가져오기
  - 제품 정보 표시하기

#### Loading, Error, Fetch Single Product

- fetch single product
- setup loading and error
- make id dynamic
- new URLSearchParams
- window.location.search
- get(keyName)

#### Display Single Product

```js
const displayProduct = (product) => {
  const { company, colors, description, name: title, price, image } = product.fields;

  // ... (단일 제품을 표시하기 위한 설정
};
```

#### Display Colors 상품의 색상 정보 표시

- iterate over colors array 제품의 색상 배열 순회
- return span with dynamic color value

```js
const displayProduct = (product) => {
  const {
    // ... (fields)
    colors,
  } = product.fields;

  const colorsList = colors.map((color) => `<span class="product-color" style="background: ${color}"></span>`).join("");
};
```

### 화살표 함수

- 아래 두 표현은 기능적으로 동일 차이점은 this
- 화살표 함수는 주로 간결성과 콘텍스트 바인딩 때문에 단축된 문법으로 많이 사용된다.
- 일반 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.
  - 화살표 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다. 동적으로 결정되는 일반 함수와는 달리 화살표 함수의 this 언제나 상위 스코프의 this를 가리킨다. 이를 Lexical this라 한다.
- this에 대한 바인딩이 없다 = this 키워드가 특정 객체를 참조하지 않는다.
  - JS에서 함수를 선언하면 그 함수는 this라는 특별한 변수를 가지게 된다.
    - 이 this는 함수가 호출되는 방식에 따라 다른 객체를 참조하게 되는데 이를 this 바인딩이라고 한다.
      - function으로 선언한 함수가 메소드로 호출되냐 함수 자체로 호출되냐에 따라 동적으로 this가 바인딩된다.
  - 그러나 화살표 함수에서는 this에 대한 바인딩이 없다
    - 즉 화살표 함수 내부에서 this를 사용하면, 화살표 함수를 둘러싼 가장 가까운 일반 함수의 this를 참조하게 된다.
      - 만약 가까운 함수가 없다면?
      - 전역 객체를 참조한다.
        - 따라서 call, apply, bind 메소드로 this를 변경할 수 없다.
          - 이 메소드들은 함수의 this를 명시적으로 설정할 수 있게 해주지만 화살표 함수에서는 this에 대한 바인딩이 없기 때문이다.
    - ## 또한 메서드가 아닌 함수에만 사용해야 한다. ( 화살표 함수 표현식은 this가 없기 때문에)

```js
function displayProducts(list) {
  // 함수 내용
}
```

```js
const displayProducts = (list) => {
  // 함수 내용
};
```

```js
// 기존의 익명 함수
(function (a, b) {
  return a + b + 100;
});

// 화살표 함수
(a, b) => a + b + 100;

const a = 4;
const b = 2;

// 기존의 익명 함수 (매개변수가 없음)
(function () {
  return a + b + 100;
});

// 화살표 함수 (매개변수가 없음)
() => a + b + 100;
```

```js
// 메서드로 사용하면 안돼
// Bad
const person = {
  name: "Lee",
  sayHi: () => console.log(`Hi ${this.name}`),
  // this가 window를 가리킨다
};
person.sayHi(); // Hi undefined
```

```js
// Good
const person = {
  name: "Lee",
  sayHi() {
    // === sayHi: function() {
    console.log(`Hi ${this.name}`);
  },
};

person.sayHi(); // Hi Lee
```

- https://velog.io/@padoling/JavaScript-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98%EC%99%80-this-%EB%B0%94%EC%9D%B8%EB%94%A9
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- https://poiemaweb.com/es6-arrow-function

#### 콘텍스트 바인딩

- 함수 호출과 실제 함수를 연결하는 과정
- JavaScript에서 함수가 실행될 때 this 키워드가 어떤 값을 참조하는지를 결정하는 것
- 함수가 호출될 때 this는 실행 컨텍스트에 따라 동적으로 결정되며, 이를 콘텍스트 바인딩이라고 합니다.

전역 공간의 this : 전역 객체
메소드 호출 시 메소드 내부의 this : 해당 메소드를 호출한 객체
함수 호출 시 함수 내부의 this : 지정되지 않음(??)

> 1번과 2번은 그럴듯한데... 3번이 좀 이상한 것 같습니다. 함수를 호출했을 때 그 함수 내부의 this는 지정되지 않습니다. 그리고 this가 지정되지 않은 경우, this는 자동으로 전역 객체를 바라보기 때문에 함수를 호출하면 함수 내부에서의 this는 전역 객체가 된다고 정리할 수 있습니다. 음... 킹받지만 아쉽게도 자바스크립트 개발자 중 한 명인 더글라스 크락포드조차 이 점은 설계상의 오류라고 지적했습니다.

그러니까 정리하자면

1. 전역에서 호출될 때 this 전역 객체 window 또는 global 을 참조
2. 객체의 메서드로 호출될 때 그 메서드를 호출한 객체를 참조
3. 콜백 함수 내에서의 this 는 전역 객체
4. 화살표 함수 내에서의 this는 함수가 정의된 시점에서 상위 스코프의 this 값을 가져옴

```js
// 화살표 함수
const arrowFunction = () => {
  console.log(this);
};

// 일반 함수
function regularFunction() {
  console.log(this);
}

const obj = {
  arrow: arrowFunction,
  regular: regularFunction,
};

obj.arrow(); // 화살표 함수 내의 this는 obj 객체를 가리킴
obj.regular(); // 일반 함수 내의 this는 obj 객체를 가리킴

// 전역에서의 호출
arrowFunction(); // 화살표 함수 내의 this는 전역 객체(window 또는 global)를 가리킴
regularFunction(); // 일반 함수 내의 this는 전역 객체(window 또는 global)를 가리킴
```

- https://hackinghack.tistory.com/123
- https://velog.io/@edie_ko/js-this
- https://velog.io/@padoling/JavaScript-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98%EC%99%80-this-%EB%B0%94%EC%9D%B8%EB%94%A9

### 객체 분해 destructuring

```js
const product = {
  id: 123,
  name: "Example Product",
  price: 19.99,
};

const { id } = product; // 객체 분해. id 속성 가져와서 새로운 변수 id에 할당

console.log(id); // 출력: 123
```

### 쿼리 문자열

`console.log(window.location.search);`

- 현재 페이지 URL의 쿼리 문자열을 콘솔에 출력
- window.location.search는 현재 페이지의 URL에서 쿼리 문자열을 나타냄
- 예를 들어, product.html?id=123&name=john&age=25와 같은 URL에서 ?id=123&name=john&age=25가 쿼리 문자열.

### URLSearchParams

Date, Math 같은 JS의 내장 객체. (date 역시 new Date()로 쓸 수 있다.)

URL의 쿼리 문자열에서 키와 값의 쌍을 추출하거나, 쿼리 문자열에 키와 값의 쌍을 추가하거나, 특정 키의 값을 가져오거나 설정하거나, 특정 키를 삭제하는 등의 작업을 수행할 수 있다.

- https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams
