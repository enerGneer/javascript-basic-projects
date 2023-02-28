// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
// 페이지가 로드될 때 함수가 실행되게 할 것

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

// 비디오 플레이-멈추기 버튼 만들기
btn.addEventListener("click", function () {
    // 클래스 추가 제거는 토글을 쓸 수 있다.
    // 그러나 토글을 사용하지 않고 이와 같은 video에 적용되는 메서드를 사용할 수 있다.
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        video.pause();
    } else {
        btn.classList.remove("slide");
        video.play();
    }
});

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("DOMContentLoaded", function () {
    // 컨텐츠가 다 로드되면 preloader의 클래스를 hide로 바꿔준다
    preloader.classList.add("hide-preloader");
});
