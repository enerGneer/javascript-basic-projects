# Reviews carousel

## Check Point

- Object
- DOMContentLoaded
- addEventListener()
- array.length
- textContent

## DOMContentLoaded

이 DOMContentLoaded에서 영감받아서 아래와 같은 스크립트로 티스토리 블로그의 ‘공감’ 이라는 버튼을 ‘좋아요’로 바꾸는 것에 성공!

이 공감 버튼은 HTML에서 직접 접근이 불가능하게 되어있어서 JS를 사용할 수밖에 없었다. 그러나 무턱대고 innerText를 좋아요로 설정하는 스크립트를 넣는다고 해서 작동하지 않았고, DOMContentLoaded를 사용해도 마찬가지였다. 그래서 DOMContentLoaded보다 늦게 로드되는 걸 찾기로 했고, 그게 바로 onload였다. 이벤트리스너의 load도 onload와 동일하다고 한다. 차이점은 onload는 한번밖에 사용할 수 없지만 load 이벤트리스너는 얼마든지 사용가능하다고 한다.

```jsx
window.onload = function () {
  document.querySelector(".txt_like").innerText = "좋아요";
};
```

```jsx
window.addEventListener("load", function () {
  document.querySelector(".txt_like").innerText = "좋아요";
});
```

여기에서 innerText 대신 textContent로 수정해주었다.

MDN 문서의 항목 중 아래 부분 때문이다.

> `innerText`의 CSS 고려로 인해, innerText 값을 읽으면 최신 계산값을 반영하기 위해 [리플로우](https://developer.mozilla.org/ko/docs/Glossary/Reflow)가 발생합니다. (리플로우 계산은 비싸므로 가능하면 피해야 합니다)

```jsx
window.addEventListener("load", function () {
  document.querySelectorAll(".uoc-icon>span")[1].textContent = "좋아요";
});
```

### 🔗 REF

[https://mesonia.tistory.com/68](https://mesonia.tistory.com/68)

[https://inpa.tistory.com/entry/JS-📚-windowonload-정리](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-windowonload-%EC%A0%95%EB%A6%AC)
