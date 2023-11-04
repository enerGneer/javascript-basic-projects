# scroll navigation

## Check Point

- document.getElementById()
- getFullYear()
- getBoundingClientRect()
- slice method
- window.scrollTo()

### getBoundingClientRect()

- 다이나믹하게 값을 가져올 수 있다.
- 여기서는 links.getBoundingClientRect().height; 라고 썼으므로 height 을 가져옴

- https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect

### pageYOffset is deprecated?

- 구형 브라우저 신경안써도 되면 scrollY 쓰고, 구형 브라우저까지 신경써야 한다면 pageYoffset을 쓴다.

- https://stackoverflow.com/questions/44757869/window-pageyoffset-vs-window-scrolly-on-ie11
- https://studyhardgogo.tistory.com/186
