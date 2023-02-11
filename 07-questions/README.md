# QnA

## Check Point

document.querySelectorAll()
addEventListener()
forEach()
classList.remove()
classList.toggle()

### forEach

forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행한다.

### 같은 결과가 출력되지만 더 좋은 방법 찾기

```js
// traversing the dom

const bnts = document.querySelectorAll(".question-btn");

bnts.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const questionParentClass = e.currentTarget.parentElement.parentElement;
    // 이 방법으로는 parent를 두 단계나 거쳐야 한다.
    questionParentClass.classList.toggle("show-text");
  });
});
```

```js
//using selectors inside the element

const questions = document.querySelectorAll(".question");
// 버튼이 아니라 클래스를 추가해줄 클래스 자체를 정의

questions.forEach(function (question) {
  // 이 각각의 클래스의 요소에 아래를 실행한다
  const btn = question.querySelector(".question-btn");
  // 우선 각 클래스의 버튼을 btn으로 정의해준다
  btn.addEventListener("click", function () {
    // 해당 버튼에 클릭 이벤트를 추가해 아래 토글을 실행한다
    question.classList.toggle("show-text");
  });
});
```
