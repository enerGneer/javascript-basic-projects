// product 컨테이너 선택
const productDOM = document.querySelector(".product");

// 제품 정보 가져오기 위한 API URL
const url = "https://course-api.com/javascript-store-single-product";

// 제품 정보 가져오는 비동기 함수
const fetchProduct = async () => {
  try {
    // 로딩 메시지
    productDOM.innerHTML = '<h4 class="product-loading">Loading... </h4>';
    // console.log(window.location.search); '현재' 페이지 URL의 쿼리 문자열 콘솔에 출력

    // // 현재 URL에서 'id' 매개변수 값을 가져오기
    // URLSearchParams로 쿼리 문자열 파싱해서 가져옴
    const params = new URLSearchParams(window.location.search);
    // id 매개변수의 값을 get 가져옴 > 이 id값은 API에 제품 정보 요청할 때 사용됨
    const id = params.get("id");

    // 제품 정보를 가져오는 API에 'id'를 포함하여 요청
    const response = await fetch(`${url}?id=${id}`);

    // API 응답을 JSON 형식으로 파싱
    const data = await response.json();

    //  params.get('id')로 얻은 제품의 ID를 활용하여 특정 제품 data를 return
    return data;
  } catch (error) {
    // 에러 발생 시 오류메시지 표시
    productDOM.innerHTML = '<p class="error">There was a problem loading the product. Please try again later </p>';
  }
};

// 제품 정보 화면에 표시하는 함수
const displayProduct = (product) => {
  // 필요한 정보 추출
  // company, colors, description, name:title, price, image(url:img)
  const { company, colors, description, name: title, price, image } = product.fields;
  const { url: img } = image[0];
  document.title = title.toUpperCase();

  // 제품 색상 목록을 동적으로 생성 > HTML 형식으로 변환
  // 위에서 객체분해한 colors는 배열임. 그 배열 각 원소에 대해 주어진 함수 실행함(map으로)
  const colorsList = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join("");

  // 동적으로 생성된 HTML에 제품 정보 채워 넣기
  productDOM.innerHTML = `<div class="product-wrapper">
        <img src="${img}" class="img" alt="${title}" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>${price / 100}</span>
          <div class="colors">
            ${colorsList}
            
          </div>
          <p>
           ${description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`;
};

const start = async () => {
  // 제품 정보 가져와서 변수에 저장
  const data = await fetchProduct();

  // 가져온 제품 정보 화면에 표시
  displayProduct(data);
};

start();
