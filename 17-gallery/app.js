// 주어진 선택자로 DOM 요소 찾아 반환, 만약 요소가 존재하지 않으면 에러 throw
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`Please check "${selection}" selector, no such element exists`);
}

class Gallery {
  // 생성자
  constructor(element) {
    // 전달받은 요소를 클래스의 컨테이너로 설정
    this.container = element;

    // 컨테이너 내의 이미지 요소들을 선택하여 리스트로 저장
    this.list = [...element.querySelectorAll(".img")];

    // target 모달과 모달 내부 요소들을 선택
    this.modal = getElement(".modal");
    this.modalImg = getElement(".main-img");
    this.imageName = getElement(".image-name");
    this.modalImages = getElement(".modal-images");
    this.closeBtn = getElement(".close-btn");
    this.nextBtn = getElement(".next-btn");
    this.prevBtn = getElement(".prev-btn");

    // self ref
    // let self = this;
    // bind functions
    // this.openModal = this.openModal.bind(this);
    // openModal 메서드에 this를 바인딩하는 코드 : openModal 메서드가 this를 통해 Gallery 인스턴스에 접근할 수 있도록 함. 그러나 아래 코드에서는 openModal 메서드를 이벤트 핸들러의 콜백 함수에서 직접 호출하지 않고, this.openModal(e.target, this.list);와 같이 this의 컨텍스트를 명시적으로 전달하므로, bind 메서드는 필요하지 않음.

    // 이와 같이 bind 메서드는 JavaScript에서 this의 컨텍스트를 제어하는 데 필요한 중요한 도구입니다. 이를 통해 클래스의 메서드가 항상 해당 클래스의 인스턴스를 참조하도록 할 수 있습니다. 이는 객체 지향 프로그래밍에서 중요한 개념입니다.
    // 클래스의 메서드들을 현재 객체(nature 또는 city)에 바인딩
    this.closeModal = this.closeModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.chooseImage = this.chooseImage.bind(this);

    // container event 이미지 클릭할 때 모달 열기
    // Gallery 클래스의 인스턴스가 생성될 때, 갤러리 컨테이너 요소에 클릭 이벤트 리스너를 추가한다.
    this.container.addEventListener(
      "click",
      function (e) {
        //  클릭 객체 e를 인자로 받아온다 -> e.target으로 클릭된 요소 참조함
        // self.openModal(); 이전에 자주 사용되던 방식으로, self라는 변수에 this를 할당하고, 그 변수를 사용하여 메서드에 접근하는 방식. 그러나 bind를 사용하면 이러한 별도의 변수를 사용하지 않고도 this를 올바르게 설정할 수 있어 불필요. (상단의 self 부분 참고)
        if (e.target.classList.contains("img")) {
          // 클릭된 요소가 img 클래스를 가지고 있는가? 만약 그렇다면 아래 코드로 모달창을 열고, 클릭된 이미지를 메인 이미지로 설정한다.
          this.openModal(e.target, this.list);
        }
      }.bind(this)
      // bing로 이벤트 핸들러 함수의 this가 Gallery 인스턴스를 가리키도록 한다. 이렇게 하지 않으면 이벤트 대상을 가리키게 됨! -> 이러면 openModal이나 this.list 같은 메서드에 접근할 수 없음.
    );
  }

  // 이하 메서드
  // 모달 열기 로직
  openModal(selectedImage, list) {
    // 메인 이미지로 설정하는 함수 호출
    this.setMainImage(selectedImage);
    // 생성자에서 모든 이미지를 받아와서 리스트로 저장한 그것을 받아옴. 모달 내부의 이미지 리스트 갱신
    this.modalImages.innerHTML = list // 해당 갤러리 섹션에 속한 모든 이미지 요소들 배열. 모달 내부의 이미지 리스트를 새로운 HTML 문자열로 대체하는 것
      .map(function (image) {
        // .map으로 모든 각 이미지 요소 list에 대해 함수를 호출 -> 각 이미지 요소를 img 태그 문자열로 변환.
        return `<img src="${image.src}" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}"/>`;
      })
      .join("");
    // join으로 문자열로 합쳐준다

    this.modal.classList.add("open"); // open 클래스를 추가하여 모달창 열어준다

    // 이벤트 리스너 추가 : 모달창 각 버튼에 이벤트 리스너 추가. 각각 우측 메서드 호출
    this.closeBtn.addEventListener("click", this.closeModal);
    this.nextBtn.addEventListener("click", this.nextImage);
    this.prevBtn.addEventListener("click", this.prevImage);
    this.modalImages.addEventListener("click", this.chooseImage);
  }

  // 메인 이미지 설정 로직
  setMainImage(selectedImage) {
    // 메인 이미지를 받아온 이미지 src로 변경
    this.modalImg.src = selectedImage.src;
    // 받아온 title로 변경 -> 모달창에 현재 이미지 이름 표시
    this.imageName.textContent = selectedImage.title;
  }

  // 모달 닫기 로직 및 이벤트 핸들러 제거
  closeModal() {
    // open 클래스 제거
    this.modal.classList.remove("open");
    // 이벤트 리스너 제거
    this.closeBtn.removeEventListener("click", this.closeModal);
    this.nextBtn.removeEventListener("click", this.nextImage);
    this.prevBtn.removeEventListener("click", this.prevImage);
    this.modalImages.removeEventListener("click", this.chooseImage);
  }

  // 다음-이전 이미지로 이동
  nextImage() {
    // 현재 선택된 이미지 엘리먼트 가져옴
    const selected = this.modalImages.querySelector(".selected");
    // 다음에 표시될 이미지 나타내는 엘리먼트 가져옴 (next) 다음이 없으면=null이면 first를 사용.
    const next = selected.nextElementSibling || this.modalImages.firstElementChild;
    // 현재 선택된 이미지 클래스에서 selected 클래스 제거
    selected.classList.remove("selected");
    // next 이미지의 클래스에 selected 추가
    next.classList.add("selected");
    // setMainImage 메서드 호출하여 main이미지를 next에 지정된 이미지로 설정
    this.setMainImage(next);
  }
  prevImage() {
    const selected = this.modalImages.querySelector(".selected");
    const prev = selected.previousElementSibling || this.modalImages.lastElementChild;
    selected.classList.remove("selected");
    prev.classList.add("selected");
    this.setMainImage(prev);
  }

  // 모달 내부 이미지 리스트 중 하나를 클릭하면 해당 이미지 선택하도록 함
  chooseImage(e) {
    if (e.target.classList.contains("modal-img")) {
      // 클릭된 요소가 modal-img 클래스를 가졌는지 확인 후 맞다면 현재 선택된 이미지 엘리먼트 가져옴
      const selected = this.modalImages.querySelector(".selected");
      // 현재 선택된 이미지 selected 제거
      selected.classList.remove("selected");

      // 선택 이미지를 main 이미지로 설정
      this.setMainImage(e.target);
      // 선택 이미지의 selected 추가
      e.target.classList.add("selected");
    }
  }
}

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
// nature와 city 변수를 사용하여 두개의 갤러리를 생성함
