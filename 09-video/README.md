# video

## Check Point

document.querySelector()
addEventListener()
classList.contains()
classList.add()
classList.remove()
play()
pause()

### play(), pause()

HTMLMediaElement play() 메서드는 미디어 재생을 시작하려고 시도한다. 이 메서드는 재생이 성공적으로 시작되면 해결되는 프로미스를 반환한다.

HTMLMediaElement.pause() 메서드는 미디어 재생을 일시 중지하며, 미디어가 이미 일시 중지된 상태인 경우 이 메서드는 아무런 영향을 미치지 않는다.

### CSS overlay 씌우는 법

after에 화면 전체 absolute 포지션으로 opacity를 주었다. z-index를 -1로 하는 것으로 현재의 헤더가 0에 표시되게 한다. (비디오 컨테이너는 z-index가 -2로 설정되어 있다.)

```css
header::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: -1;
}
```

### preloader

DOMContentLoaded를 사용해서 컨텐츠가 로드되면 preloader div가 hidden이 되게 하면 된다. (classList에서 hidden 클래스를 add)

### CSS preloader

아래와 같이 hidden으로 바꿔주고 z-index를 최저치로 주면 화면에서 보이지 않게 된다.

```css
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--clr-white);
    display: grid;
    justify-content: center;
    align-items: center;
    visibility: visible;
    z-index: 999;
    transition: var(--transition);
}
.hide-preloader {
    z-index: -999;
    visibility: hidden;
}
```
