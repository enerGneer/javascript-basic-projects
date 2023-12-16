## 이벤트 핸들러 제거

### 이유

- 메모리 누수 방지
- 성능 최적화
- 이벤트 충돌 방지

### 일반적으로 removeEventListener 메서드를 사용

```js
closeModal() {
  this.closeBtn.removeEventListener('click', this.closeModal);
  this.nextBtn.removeEventListener('click', this.nextImage);
  this.prevBtn.removeEventListener('click', this.prevImage);
  this.modalImages.removeEventListener('click', this.chooseImage);
}
```

- 모달이 닫힐 때 해당 이벤트 핸들러가 더이상 필요하지 않기 때문에 메모리 누수 방지하고 성능 최적화 가능

## container

- 클래스가 관리하는 특별한 역할을 하는 요소
- 여기에서는 이미지들이 표시되는 부분
- 일반적으로 HTML 문서에서 클래스 인스턴스를 생성할 때, 이 인스턴스에 해당하는 HTML 요소(또는 DOM 요소)를 전달하여 클래스 내부에서 사용할 수 있도록 한다.
- nature인 경우 .nature라는 클래스를 가진 section 요소가 갤러리의 컨테이너 요소가 되는데, 이 요소 내부의 모든 img 요소는 gallery의 일부가 된다.
  - 이처럼 갤러리의 컨테이너 요소는 갤러리를 구성하는 이미지 요소들의 부모 요소를 나타낸다. 이 요소를 통해 갤러리의 모든 이미지 요소에 접근하고 조작할 수 있는 것.
  - 웹페이지에서 여러개의 독립적인 이미지 갤러리를 쉽게 관리하는데 필요한 요소다.

## 메서드 체이닝 method chaining

- 여러 메서드를 연속적으로 호출할 수 있는 기법
- 여기에서는 map() 메서드를 통해 새로운 배열을 반환한 뒤 -> join()으로 문자열로 결합하였다.

## map 부분

```HTML
<img src="./images/nature-1.jpeg" title="nature-1" class="img" data-id="1" alt="nature-1" />
```

이 이미지 요소에 대해 map 메서드를 호출하면 다음과 같은 문자열이 반환됨

```js
`<img src="./images/nature-1.jpeg" title="nature-1" data-id="1" class="${selectedImage.dataset.id === "1" ? "modal-img selected" : "modal-img"}"/>`;
```

- 이 문자열은 이미지의 src("./images/nature-1.jpeg"), title("nature-1"), data-id("1") 속성을 사용함.
- 선택된 이미지의 data-id가 '1'인 경우 selected 클래스를 추가하여 표시한다.

- 이렇게 생성된 img 태그 문자열들의 배열은 join('') 메서드를 통해 하나의 문자열로 합쳐진다.
- 이 문자열은 this.modalImages.innerHTML에 할당되어, 모달 창 내의 이미지 리스트를 생성하는 것.

- 기존 배열은 그대로 놔두고 새로운 배열 생성하는 것.
- 이렇게 생성된 새로운 배열은 map 메서드가 호출된 변수에 할당되어 활용할 수 있다.

list 안에 담겨있는 요소를 console.dir 하면 아래와 같다

```js
[
  {
    src: "./images/nature-1.jpeg",
    title: "nature-1",
    className: "img",
    dataset: { id: "1" },
    alt: "nature-1",
    // ...other properties...
  },
  // ...other elements...
];
```

## ||

    ```js
    const next = selected.nextElementSibling || this.modalImages.firstElementChild;
    ```

    - || 연산자를 사용하여 좌측 값이 null이면 그 다음 값을 실행하도록 함.
    - 이렇게 둘 중 하나라도 true이면 결과가 true이므로 OK
    - 왼쪽 피연산자에서 이미 true가 판정되면 우측 값은 무시함
