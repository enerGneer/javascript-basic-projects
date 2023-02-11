# Modal

## Check Point

- document.querySelector()
- addEventListener()
- classList.add()
- classList.remove()

### CSS

### modal 전체 감싸는 div

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(73, 166, 233, 0.5);
  display: grid;
  place-items: center;
  transition: var(--transition);
  visibility: hidden;
  z-index: -10;
}
```

visibility는 차지하고 있는 공간은 유지한채 요소만 숨긴다.

### 모달 보이게 하는 부분

```css
.open-modal {
  visibility: visible;
  z-index: 10;
}
```

visible로 바꿔준다. (hidden을 덮어쓴다)

z-index 수치도 덮어쓴다 (-10을 덮어쓴다)

### 모달 컨테이너 설정

- display grid

  - place-items로 가운데 정렬
    - stretch 인 경우 여백을 꽉 채운다.

- position relative
  - 요소 자기 자신의 원래 위치(static일 때의 위치)를 기준으로 배치한다.
  - 다른 요소에 영향 미치지 않는다.

```css
.modal-container {
  display: grid;
  place-items: center;
  position: relative;
}
```

### 모달 close 버튼

상단 우측에 정렬하게 하는 옵션

absolute 포지션으로 다른 블록들과 관계없이 위치를 고정해준다

```css
.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
```
