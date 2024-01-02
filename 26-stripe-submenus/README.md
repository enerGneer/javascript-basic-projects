# Stripe Submenu - Hide and Column Layout

## Sidebar Toggle 구현

- show 클래스를 add / remove 한다
- sublinks 데이터를 추가하여 각 메뉴 항목과 해당 항목의 하위 링크를 반복하여 사이드바에 추가한다.

## Submenu Setup

각 링크 버튼에 mouseover시 서브메뉴 설정
show 클래스 추가하고 위치를 계산한다

## Submenu Links

서브메뉴 구성 시 columns 변수 사용하여 링크 개수에 따라 서브메뉴 열을 조정한다

반복문으로 반복하여 join한다.

## Hide and Column Layout

링크 버튼 이벤트 핸들러 (mouseover):

linkBtns 배열에 있는 각 링크 버튼에 대해 mouseover 이벤트 핸들러를 등록합니다.
버튼에 마우스를 올리면 해당 버튼의 텍스트를 추출하고(const text = e.currentTarget.textContent;), 그에 해당하는 sublinks 데이터에서 정보를 찾습니다.
찾은 정보를 사용하여 서브메뉴를 표시하고 위치를 조정합니다.

서브메뉴의 열 수 동적 조정:

let columns = "col-2";를 사용하여 초기에 열의 기본 값을 설정합니다.
링크의 개수에 따라 columns 값을 동적으로 조정합니다.
서브메뉴의 HTML을 해당 정보로 업데이트하고 서브메뉴를 표시합니다.

서브메뉴 숨김 이벤트 핸들러:

hero 요소나 nav 요소에 마우스를 올리면 서브메뉴를 숨깁니다.
hero.addEventListener("mouseover", ...) 및 nav.addEventListener("mouseover", ...)를 사용하여 각 영역에 대한 이벤트를 등록하고, submenu.classList.remove("show");를 사용하여 show 클래스를 제거하여 숨깁니다.
이렇게 함으로써 링크 버튼에 마우스를 올렸을 때 동적으로 서브메뉴를 표시하고, 다른 영역에 마우스를 올렸을 때 서브메뉴를 숨기는 기능이 구현되며, 링크의 개수에 따라 열의 수가 동적으로 조정됩니다.

## 중첩된 map (nested map)

map(item) 안에 map(link)가 있다.

```js
sidebar.innerHTML = sublinks
  .map((item) => {
    const { links, page } = item;
    return `<article>
      <h4>${page}</h4>
      <div class="sidebar-sublinks">
        ${links
          .map((link) => {
            return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
          })
          .join("")}
      </div>
    </article>`;
  })
  .join("");
```

외부 맵 (sublinks.map):
sublinks 배열을 순회하면서 각 sublinks 배열의 각 항목(item으로 명명)에 대해 내부의 맵을 수행.

내부 맵 (links.map):
외부 map 내에서 구조 분해 할당으로 추출한 links 배열을 순회하면서 각 link에 대해 HTML 문자열을 생성.
link는 각 메뉴 항목의 하위 링크!

## function (e)

- e는 이벤트 객체 event object.
- 이벤트 객체는 이벤트가 발생했을 때, 해당 이벤트에 대한 정보를 담고 있는 객체
- 이 객체는 이벤트 핸들러 함수에 자동으로 전달되며, 이벤트와 관련된 여러 속성과 메서드를 제공
- 주요 속성
  - e.currentTarget:
    - 현재 이벤트가 발생한 요소. 여기서는 버튼 요소. btn
    - 이벤트 핸들러가 현재 실행중인 요소
    - 이벤트 핸들러가 바인딩된 요소
    - 이 값은 항상 일정하다!
  - e.target:
    - 이벤트가 실제로 발생한 요소
    - 발생한 위치의 요소?
    - 이 값은 이벤트가 전파되면서 변경될 수 있음.
      - 이벤트 전파가 뭐냐
        - 이벤트가 발생한 요소에서 시작해 상위 요소로 이벤트가 전파되는 과정을 이벤트 버블링(Event Bubbling)이라고 한다.
        - 반대로 이벤트 캡처(Event Capturing)는 이벤트가 상위 요소에서 시작해 하위 요소로 이벤트가 전파되는 과정
          - 보통 DOM에서는 이벤트 버블링이 기본 동작이다!
          - 이벤트가 전파되는 동안에 e.target은 항상 현재 이벤트가 실제로 발생한 요소를 가리킵니다. 그러나 e.currentTarget은 현재 이벤트 핸들러가 실행 중인 요소를 계속 가리키며, 이것은 이벤트가 전파되는 동안 변하지 않습니다.
  - e.clientX와 e.clientY: 마우스 포인터의 현재 위치를 화면의 왼쪽 위를 기준으로 나타낸다.
- 이 코드에서는 e.currentTarget.textContent으로 이벤트가 발생한 버튼의 텍스트를 가져온다.

## getBoundingClientRect

- DOM 요소의 크기와 위치 정보를 반환한다. 특정 요소의 상대적인 위치, 너비, 높이 등을 알 수 있다.

```js
linkBtns.forEach((btn) => {
  btn.addEventListener("mouseover", function (e) {
    // 마우스오버 이벤트가 발생하면 아래의 동작 실행

    // 마우스 이벤트가 발생한 버튼의 위치 정보를 가져옴
    const tempBtn = e.currentTarget.getBoundingClientRect();

    // tempBtn을 출력함
    console.log(tempBtn);
  });
});
```

console log 결과는 아래와 같음

```js
DOMRect {
  x: 100,          // x 좌표
  y: 200,          // y 좌표
  width: 50,       // 너비
  height: 30,      // 높이
  top: 200,        // 상단 좌표
  right: 150,      // 우측 좌표
  bottom: 230,     // 하단 좌표
  left: 100        // 좌측 좌표
}
```

그럼 아래 코드의 의미는

```js
const bottom = tempBtn.bottom - 3;
```

마우스 이벤트가 발생한 버튼의 하단 좌표 tempBtn에서 3픽셀 뺀 값을 bottom 변수에 할당함.

이렇게 마우스 오버한 버튼 주변에 서브메뉴를 위치시킬 수 있는 것이다!

## find() -> Array.prototype.find() 메서드

배열 내에서 제공된 콜백 함수의 테스트를 통과하는 첫 번째 요소를 찾아 반환한다.

못 찾으면 undefined를 반환한다

```js
const foundElement = array.find((element) => {
  // 테스트를 통과하는 조건을 작성
  // 만약 조건을 만족하면 해당 요소가 반환됨
});
```

array: 요소를 찾을 배열.

element: 배열의 각 요소를 대표하는 변수로, 사용자가 지정한 콜백 함수에서 이 변수를 이용하여 특정 조건을 검사한다.

콜백 함수: 각 배열 요소에 대해 실행되는 함수로, 조건을 정의하고 해당 조건을 만족하는 첫 번째 요소를 반환한다.

#### 숫자 배열에서 3의 배수를 찾는 예시

```js
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.find((num) => num % 3 === 0);

console.log(result); // 3
```

첫번째인 3을 찾아 반환함

#### 여러 요소를 찾고 싶다면?

filter() 메서드를 사용하면 된다.

#### filter() 예시

```js
const numbers = [1, 2, 3, 4, 5, 6];

// 짝수를 찾아서 새로운 배열로 반환
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]
```
