// products 배열의 사본을 filteredProducts에 저장.
let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");

// filtered 배열의 product를 productContainer에 표시한다
const displayProducts = () => {
  // 배열이 비어있는지 확인
  if (filteredProducts.length < 1) {
    // 배열이 비어있으면 메시지 표시하고 함수 종료
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  // 배열이 비어있지 않으면 각 상품에 대한 HTML 코드 생성
  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      const { id, title, image, price } = product;
      return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`;
    })
    .join("");
  // map이 반환하는 건 프로덕트1개당 1개의 html코드. 생성된 코드를 하나의 문자열로 합쳐야 innerHTML속성에 할당 가능
};

displayProducts();

// Text Filter

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

// form에 keyup 이벤트 리스너 추가. 사용자가 키 눌렀다가 놓을 때마다 입력 값에 따라 제품 목록 필터링 표시
form.addEventListener("keyup", () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

console.log(
  // 빈 문자열이 제목에 포함된 제품필터링 = 모든 문자열에 포함 = 즉 모든 제품 반환 = 디버깅용!
  products.filter((product) => {
    return product.title.toLowerCase().includes("");
    // 즉 return true; 와 같다
  })
);

// Filter Buttons 회사별 버튼 눌렀을 때 필터링 되도록

const companiesDOM = document.querySelector(".companies");

// 각 상품 회사 이름 가져와서 버튼 생성하기
const displayButtons = () => {
  const buttons = ["all", ...new Set(products.map((product) => product.company))];
  // console.log(buttons);
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class='company-btn' data-id="${company}">${company}</button>`;
      // dataset id에 company 이름 설정
    })
    .join("");
};

displayButtons();

// 회사 버튼 클릭 시 실행되는 이벤트 리스너
companiesDOM.addEventListener("click", (e) => {
  const el = e.target;
  // e.tartget은 이벤트가 발생한 요소.  여기에서는 클릭된 버튼 요소! 왜냐면 이벤트 리스너가 버튼 클릭 시 실행되기 때문에
  if (el.classList.contains("company-btn")) {
    // dataset이 all인지 확인
    if (el.dataset.id === "all") {
      //  data-id값이 all인 경우 아래 배열을 원래의 배열로 복원 = 모든 상품이 표시됨
      filteredProducts = [...products];
    } else {
      // all이 아닌 경우 해당 회사 상품만 포함하도록 필터링
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
        // company가 id랑 같은가
      });
    }
    // 텍스트 필터 입력란 값 비우기를 회사 이름 버튼 클릭 시마다 실행한다 > 이렇게 이전에 입력한 텍스트 필터에 의해 필터링 되는 걸 막아줄 수 있다.
    searchInput.value = "";
    // filteredProducts 배열에 있는 상품들을 표시
    displayProducts();
  }
});
