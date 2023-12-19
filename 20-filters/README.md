## Filters Project

### 스프레드 연산자

```js
let filteredProducts = [...products];
```

- 스프레드 연산자는 배열이나 문자열 같은 iterable 한 객체를 복사할 때 사용된다.
- products 배열의 모든 요소를 새로운 배열로 복사한다.
- 사용사례
  - 원래 배열을 유지하면서 필터링된 결과를 따로 저장할 때 유용하다.
  - 여러 배열 합칠 때
  - 배열 일부 복사할 때
  - 함수 매개변수 전개spread
  - 배열 복사
  - 객체 전개
- 주의할 점
  - 중첩된 구조를 다룰 때는 얕은 복사(shallow copy)에 머무를 수 있기 때문에, 깊은 복사(deep copy)가 필요한 경우에는 추가적인 처리가 필요하다.

```js
// 여러 배열 합치기
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
```

```js
// 함수의 매개변수 전개 (배열 등 iterable한 객체를 전달할 떄 사용한다)
function myFunction(a, b, c) {
  console.log(a, b, c);
}

const args = [1, 2, 3];
myFunction(...args); // 1 2 3
```

```js
// 배열 복사
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
```

```js
// 객체 전개
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

### 얕은 복사와 깊은 복사

#### 얕은 복사

- 원본 객체의 복사본이 새로운 객체를 가리킨다
- originalArray의 얕은 복사인 shallowCopy는 배열 자체는 새로운 배열이지만, 내부의 배열은 여전히 원본 배열과 같은 참조를 갖습니다.
- 즉 원본이 변경될 수 있는 위험이 있다.

```js
const originalArray = [1, 2, [3, 4]];

// 얕은 복사
const shallowCopy = [...originalArray];

// 결과: [1, 2, [3, 4]]
```

```js
// 오브젝트 예시
const originalArray = [1, 2, { a: 3 }];

// 얕은 복사
const shallowCopy = [...originalArray];

// 내부 객체 참조 비교
console.log(originalArray[2] === shallowCopy[2]); // true

// 최상위 레벨 값 변경
originalArray[0] = 99;

// 변경 사항 반영 확인
console.log(shallowCopy[0]); // 1 (영향을 받지 않음)

// 내부 객체의 값 변경
originalArray[2].a = 999;

// 변경 사항 반영 확인
console.log(shallowCopy[2].a); // 999 (영향을 받음)
```

```js
// 배열 예시
const originalArray = [1, [2, 3], { a: 4 }];

// 얕은 복사
const shallowCopy = [...originalArray];

// 최상위 레벨 값 변경
originalArray[0] = 99;

console.log(shallowCopy[0]); // 1 (변경이 반영되지 않음)

// 내부 배열의 값 변경
originalArray[1][0] = 999;

console.log(shallowCopy[1][0]); // 999 (변경이 반영됨)
```

위의 코드에서 originalArray와 shallowCopy는 같은 내부 배열을 참조하고 있기 때문에 originalArray에서 내부 배열의 값을 변경하면 shallowCopy에서도 동일한 변경이 반영됨.

즉 최상위 레벨의 값은 각 배열 요소이고, 내부 객체의 값은 내부의 키-밸류로 이루어진 객체고 요것은 포인터로만 지정되는 것이다.

- 내부 객체에는 배열 내의 배열, 객체 내의 객체 등이 있다.

#### 깊은 복사

- 원본 객체와 내부의 모든 객체를 새롭게 복사한다.
- 원본과 완전히 독립된, 분리된 객체가 됨.
- JSON.stringify를 사용하여 객체를 문자열로 변환하고, 그 후 JSON.parse를 사용하여 다시 객체로 변환함으로써 깊은 복사를 수행합니다. 하지만 이 방법은 일부 특수한 객체나 함수 등을 복사하지 못하는 경우가 있다.

```js
const originalArray = [1, 2, [3, 4]];

// 깊은 복사
const deepCopy = JSON.parse(JSON.stringify(originalArray));

// 결과: [1, 2, [3, 4]]
```

## Set

- 중복을 허용하지 않는 집합 객체.
- 순서가 있는 고유 요소들의 모음을 관리할 때 유용하다.
- 값 추가 시에는 `.add(값)`
- new set 문법 사용 시 일반 배열 같은 iterable 객체를 set으로 만들 수 있다 (중복을 제거하여)

```js
const myArray = [1, 2, 2, 3, 4, 4, 5];

const uniqueValues = new Set(myArray);
// uniqueValues: {1, 2, 3, 4, 5}
```

따라서

```js
const buttons = ["all", ...new Set(products.map((product) => product.company))];
```

이 부분은 products 배열에서 각 제품의 회사 이름을 추출하여 중복 제거한 유니크 목록 set을 생성하는 것이다.

## map, join, innerHTML

- innerHTML은 문자열만 받는다.
- 따라서 배열을 직접 할당하려고 하면 배열을 문자열로 자동변환하는데, 이 과정에서 배열 각 요소 사이에 쉼표가 추가된다.

```js
["<p>Product 1</p>", "<p>Product 2</p>", "<p>Product 3</p>"];
```

이런 배열이 있다고 가정할 때 이걸 그대로 innerHTML속성에 할당하면

```HTML
"<p>Product 1</p>,<p>Product 2</p>,<p>Product 3</p>"
```

이런 문자열이 생성된다.

따라서 join("") 메서드를사용하여 각 요소를 하나의 문자열로 합치면 쉼표가 제거되어 원하는대로 표시할 수 있다.

```HTML
"<p>Product 1</p><p>Product 2</p><p>Product 3</p>"
```

### HTML Structure

- section.products

  - div.filters-container
  - div.products-container

- .filters-container

  - form.input-form
    - input.search-input
  - h5(company)
  - article.companies
    - button.company-btn(temp values)

- .products-container
  - article.product
    - img.product-img.img (src from products.js)
    - footer
      - h5.product-name(name)
      - span.product-price(price)

#### Display Products

- import products
- make a copy and assign to new variable (use let keyword)
- select .products-container
- setup a function displayProducts, iterate over products, display them

#### Filter Based On Text

- select form, input
- listen for 'keyup' events on form
- get input value
- filter based on the input value
- call displayProducts

```js
// Text Filter

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  // keyup - fired when key released
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});
```

#### Empty Array

- displayProducts()
- check length of filteredProducts
- if list.length < 1
- set productsContainer = some text

#### Display Filter Buttons

- select .companies
- create function displayButtons
- get only unique companies (set)
- iterate over results
- return button with data-id
- set .companies innerHTML equal to result

#### Filter Based on Company

- add event listener on .companies
- look for event.target
- if contains .company-btn proceed
  - if 'all' return all products (copy)
  - else filter based on company value
- set search value ''
- call displayProducts
