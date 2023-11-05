const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  //선택한 거 id 가져옴
  console.log(e.target);
  console.log(e.target.dataset);
  console.log(e.target.dataset.id);
  if (id) {
    // id가 true 일때
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
    // active를 넣어줌
  }
});
