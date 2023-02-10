// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggleBtn.addEventListener("click", navToggleBtnHandler);

function navToggleBtnHandler() {
  // console.log(links.classList.contains("links")); // true

  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  // 위의 다섯줄의 코드를 아래의 한줄로 표현 가능하다.
  links.classList.toggle("show-links");
}
