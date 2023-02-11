//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  // console.log(question);
  // 각각의 article.question이 콘솔창이 출력된다.
  const btn = question.querySelector(".question-btn");
  // console.log(btn);
  // 각 버튼이 콘솔창에 출력된다.
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      // console.log(item);
      // 3개의 항목이 다 출력된다.
      if (item !== question) {
        item.classList.remove("show-text");
        // 다른 아이템을 눌렀을 때 해당하지 않는 아이템이 접히게 하는 스크립트
      }
    });
    question.classList.toggle("show-text");
  });
});

// traversing the dom

// const bnts = document.querySelectorAll(".question-btn");

// bnts.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const questionParentClass = e.currentTarget.parentElement.parentElement;
// // 이 방법으로는 parent를 두번이나 해줘야 한다.
//     questionParentClass.classList.toggle("show-text");
//   });
// });
