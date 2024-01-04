const container = document.querySelector(".container");

const display = (followers) => {
  // followers 배열을 map으로 순회하며 세부 정보로 HTML 생성
  const newFollowers = followers
    .map((person) => {
      // 팔로워 배열 각 요소 순회하여 필요한 데이터 구조 분해 할당으로 추출
      const { avatar_url, login, html_url } = person;
      // 추출한 데이터로 HTML 만듦
      return `
       <article class='card'>
         <img src="${avatar_url}" alt='person' />
           <h4>${login}</h4>
         <a href="${html_url}" class="btn">view profile</a>
       </article>
       `;
    })
    .join(""); // 만든 것들 합침

  // 위에서 만든 것들을 container에 HTML로 뿌려줌
  container.innerHTML = newFollowers;
};

export default display;
