// API url
const url = "https://course-api.com/javascript-store-products";

// product 컨테이너
const productsDOM = document.querySelector(".products-center");

// 함수의 실행이 완료될 때까지 다른 코드의 실행이 차단되지 않는다.
//  async 키워드를 사용하면 함수가 비동기 함수로 선언되고, await 키워드를 사용하여 비동기 작업이 완료될 때까지 기다릴 수 있다.
const fetchProducts = async () => {
  // 실행 완료되지 않은 사이에(상품 표시되지 않은 사이에) 상품 표시될 곳에 로딩 메시지 표시해줌
  productsDOM.innerHTML = '<div class="loading"></div>';
  // try-catch 에러처리
  try {
    // await : fetch가 완료될때까지 기다리기
    // fetch()는 promise를 반환하는 비동기 함수. await을 사용하여 promise가 이행될때까지 함수 실행 일시 중지
    // 이행되면 결과값은 주어진 URL에서 가져온 HTTP 응답(response)이다.
    const resp = await fetch(url);
    // HTTP response 본문을 JSON으로 파싱.
    // json() 역시 promise를 반환하는 비동기 메서드. await을 사용하여 promise가 이행될때까지 기다린다 -> 다 되면 결과값은? : 파싱된 JSON 데이터
    const data = await resp.json();
    // JSON data를 리턴한다. fetchProducts 함수를 호출한 곳에서 사용된다. 맨 아래 start 함수에서 호출됨!
    return data;
  } catch (error) {
    // 에러날 경우 아래의 코드가 실행된다.
    productsDOM.innerHTML = '<p class="error">there was an error</p>';
  }
};

// 아래 displayProducts(data)에서 data가 list로 전달된다
const displayProducts = (list) => {
  // 즉 list: 받아온 제품 목록 데이터
  const productList = list

    // map 함수를 사용하여 제품 목록을 순회하면서 HTML 코드를 생
    .map((product) => {
      // 제품의 필요한 정보들 추출
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;
      // id,name,price,img

      // 각 제품에 대한 HTML 코드 생성
      return `<a class="single-product" href="product.html?id=${id}&name=john&age=25">
            <img src="${img}" class="single-product-img img" alt="${title}" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>`;
    })
    .join(""); // 문자열 변환

  // 화면 제품 목록 컨테이너에 HTML 코드 삽입
  productsDOM.innerHTML = ` <div class="products-container">
         ${productList}
          
        </div>`;
};

const start = async () => {
  // 위의 fetchProducts에서 return한 data를 받아와 start 함수의 data 변수에 저장 (url에서 fetch한 값은 json으로 파싱된 결과값임)
  const data = await fetchProducts();
  // data 변수에 담긴 값을 displayProducts로 보낸다
  displayProducts(data);
};

start();
