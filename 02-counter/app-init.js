// set initial count
let count = 0;

const value = document.querySelector("#value");

const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");

function decreaseHandler(event) {
  // 현재 숫자 value 추출해서 1 빼줌 그리고 그거 count에 넣어줌
  count = count - 1;
  value.innerText = count;
}
function resetHandler(event) {
  // count를 0으로 초기화
  count = 0;
  value.innerText = count;
}
function increaseHandler(event) {
  // 현재 숫자 value 추출해서 1 더해줌 그리고 그거 count에 넣어줌
  count = count + 1;
  value.innerText = count;
}

decreaseBtn.addEventListener("click", decreaseHandler);
resetBtn.addEventListener("click", resetHandler);
increaseBtn.addEventListener("click", increaseHandler);
