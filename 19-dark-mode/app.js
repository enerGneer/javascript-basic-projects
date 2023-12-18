const toggleBtn = document.querySelector(".btn");
const articlesContainer = document.querySelector(".articles");

// 토글버튼에 클릭 이벤트 리스너를 추가한다. 클릭되면 class 목록에 dark-theme 클래스를 토글한다
toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

// data.js에 있는 articles 배열의 각 요소에 대해 함수를 실행하고 그 결과를 문자열로 결합한다.
const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    const formatDate = moment(date).format("MMMM Do, YYYY");
    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
  })
  .join("");

// 생성된 아티클 목록을 articlesContainer
articlesContainer.innerHTML = articlesData;
