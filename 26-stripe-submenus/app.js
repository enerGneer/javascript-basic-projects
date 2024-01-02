// sublinks 배열을 가지고 있는 data.js 불러옴
import sublinks from "./data.js";

// DOM 요소 선택
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const sidebar = document.querySelector(".sidebar-links");
const linkBtns = [...document.querySelectorAll(".link-btn")];
const submenu = document.querySelector(".submenu");
const hero = document.querySelector(".hero");
const nav = document.querySelector(".nav");

// hide/show sideabar 토글 버튼 클릭 시 사이드바가 나옴
toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});

// set sidebar 각 메뉴 항목과 해당 항목의 서브링크를 동적으로 추가한다
sidebar.innerHTML = sublinks
  .map((item) => {
    // sublinks의 각 배열에 아래를 실행
    // sublinks의 각 배열을 순회하며 item 하나당 구조 분해 할당하여 links, page 프로퍼티 추출
    const { links, page } = item;

    // map이 sublink 아이템을 순회하여 각 item마다 아래와 같은 HTML 문자열을 join하여 반환
    return `<article >
      <h4>${page}</h4>
      <div class="sidebar-sublinks">
      ${links
        // 중첩 map
        .map((link) => {
          return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
        })
        .join("")}
      </div>
      </article>`;
  })
  .join("");

// hover event 각 링크 버튼에 이벤트 리스너를 등록하여 마우스오버 시 동적으로 서브메뉴 표시하고 위치를 조절한다
linkBtns.forEach((btn) => {
  btn.addEventListener("mouseover", function (e) {
    // 마우스오버 이벤트가 발생하면 아래의 동작 실행

    // 이벤트 리스너가 btn에 추가되었으므로, e.currentTarget은 btn을 가리킨다
    // 마우스 이벤트가 발생한 버튼의 텍스트 내용 가져옴
    const text = e.currentTarget.textContent;
    // 버튼 위치와 크기에 대한 정보를 가져옴
    const tempBtn = e.currentTarget.getBoundingClientRect();

    // 버튼의 가로 중심 좌표를 계산함
    const center = (tempBtn.left + tempBtn.right) / 2;
    // 버튼 아래쪽 위치에서 약간 여유 공간 둠. 3px만큼 위쪽으로 이동
    const bottom = tempBtn.bottom - 3;

    // sublinks 배열의 항목을 find해서 특정 조건을 만족하는 첫번째 요소를 찾는다
    const tempPage = sublinks.find((link) => link.page === text);
    // tempPage에는 위에서 정의한 text(마우스 이벤트가 발생한 버튼의 텍스트내용)과 동일한 value를 갖는 page를 찾아, 해당 sublinks 배열의 요소인 link를 리턴한다.

    // 조건을 만족하는 sublinks 배열의 요소가 '존재할' 경우 다음과 같이 실행한다
    if (tempPage) {
      // 구조 분해 할당
      const { page, links } = tempPage;

      // submenu 클래스를 갖는 곳에 show 클래스를 추가함
      submenu.classList.add("show");
      // submenu 요소의 위치를 조정함. 버튼의 가로 중심좌표
      submenu.style.left = `${center}px`;
      // 버튼의 아랫쪽에서 3px 위로 조정한 값
      submenu.style.top = `${bottom}px`;

      // submenu 열 개수를 동적으로 조정
      let columns = "col-2"; // 초기값은 col2로 할당

      if (links.length === 3) {
        // link 개수가 3개면 col-3으로 할당
        columns = "col-3";
      }
      if (links.length > 3) {
        // 3개 초과면 col-4로 할당
        columns = "col-4";
      }

      // 위의 정보를 바탕으로 submenu 내용 동적으로 생성 (columns, map으로 세부정보)
      submenu.innerHTML = `
        <section> 
         <h4>${page}</h4>
         <div class="submenu-center ${columns}">
         ${links
           .map((link) => {
             return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
           })
           .join("")}
        </div>
        </section>
        `;
    }
  });
});

// hero, nav에 마우스 올리면 서브메뉴를 숨긴다
hero.addEventListener("mouseover", function (e) {
  submenu.classList.remove("show");
});
nav.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("link-btn")) {
    submenu.classList.remove("show");
  }
});
