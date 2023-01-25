// set initial count
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const target = event.currentTarget.classList;
    if (target.contains("decrease")) {
      count--;
    } else if (target.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "tomato";
    } else {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
