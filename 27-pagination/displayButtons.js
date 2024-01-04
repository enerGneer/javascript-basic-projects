const displayButtons = (container, pages, activeIndex) => {
  // 각 페이지 버튼 생성하여 배열로 저장한다. 활성 페이지 버튼에는 active-btn 클래스를 추가한다.
  let btns = pages.map((_, pageIndex) => {
    return `<button class="page-btn ${activeIndex === pageIndex ? "active-btn" : "null "}" data-index="${pageIndex}">
    ${pageIndex + 1}
    </button>`;
  });

  // 이전 페이지와 다음 페이지 버튼을 배열에 추가한다
  btns.push(`<button class="next-btn">next</button>`);
  // unshift로 배열 맨 앞에 요소 추가
  btns.unshift(`<button class="prev-btn">prev</button>`);

  // 생성된 버튼 배열을 cantainer에 삽입하여 화면에 표시
  container.innerHTML = btns.join("");
};

export default displayButtons;
