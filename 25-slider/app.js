import data from "./data.js";

const container = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

// if length is 1 hide buttons 슬라이드가 1개면 버튼을 숨김
if (data.length === 1) {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
}

// if length is 2, add copies of slides
// 슬라이드가 2개면 복사하여 4개로 만듦 > 무한 루프 슬라이드 구현
let people = [...data]; // data 배열 복사하여 people이라는 새로운 배열로 만들기 (독립적)
if (data.length === 2) {
  // 2개인 경우
  people = [...data, ...data]; // a, b, a, b 로 만들기
}
// 그외의 경우에는 기존 데이터를 그대로 사용한다

// 동적으로 생성한 HTML을 컨테이너에 추가
container.innerHTML = people
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    // position 변수를 이용하여 각각의 슬라이드 클래스 지정에 사용
    let position = "next";

    // 현재 슬라이드
    if (slideIndex === 0) {
      position = "active";
    }

    // 마지막 슬라이드
    if (slideIndex === people.length - 1) {
      position = "last";
    }

    //슬라이드 개수가 1개거나 그보다 적을 경우, 하나의 슬라이드만 활성화
    if (data.length <= 1) {
      position = "active";
    }

    //슬라이드의 HTML
    return `<article class="slide ${position}">
      <img src=${img} class="img" alt="${name}"/>
      <h4>${name}</h4>
      <p class="title">${job}</p>
      <p class="text">
      ${text}
      </p>
    <div class="quote-icon">
    <i class="fas fa-quote-right"></i>
    </div>
    </article>`;
  })
  .join("");

// 슬라이드 전환
const startSlider = (type) => {
  // get all three slides active,last next
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;

  // 다음 슬라이드가 없으면 첫번째 슬라이드로 이동
  if (!next) {
    next = container.firstElementChild;
  }

  // 현재 클래스 제거
  active.classList.remove("active");
  last.classList.remove("last");
  next.classList.remove("next");

  // prev 버튼 클릭 시
  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    // 다음 슬라이드가 아닐 시 마지막 슬라이드로 이동
    if (!next) {
      next = container.lastElementChild;
    }
    // 클래스 추가
    next.classList.remove("next");
    next.classList.add("last");
    return;
  }

  // next 버튼 클릭된 경우
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};

// next 버튼 클릭 시 슬라이드 전환
nextBtn.addEventListener("click", () => {
  startSlider();
});

// prev 버튼 클릭 시 슬라이드 전환
prevBtn.addEventListener("click", () => {
  startSlider("prev");
});
