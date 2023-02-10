# Nav bar

## Check Point

- document.querySelector()
- addEventListener()
- classList.toggle()

### classList.toggle()

```js
if (links.classList.contains("show-links")) {
  links.classList.remove("show-links");
} else {
  links.classList.add("show-links");
}
```

위의 다섯줄의 코드를 아래의 한줄로 표현 가능하다.

```js
links.classList.toggle("show-links");
```
