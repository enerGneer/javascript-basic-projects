// 클래스가 number인 모든 요소를 찾아 배열로 가져온다
const items = [...document.querySelectorAll(".number")];

// 각 요소에 대한 카운터를 업데이트. 1000단위로 증가시키면서
const updateCount = (el) => {
  // 요소 데이터 속성에서 value를 가져와 정수로 parse
  const value = parseInt(el.dataset.value);

  // 1000으로 나눈 값을 올림하여 1000단위로 증가시킬 값 계산. increment 값은 각 단계에서 증가시킬 값이다!
  const increment = Math.ceil(value / 1000);
  // const increment = 1;
  console.log(increment); // 각각 1, 19 2

  // 카운터 초기값 설정
  let initialValue = 0;

  // 1밀리초 간격으로 반복실행되는 타이머 생성
  const increaseCount = setInterval(() => {
    // 일정간격으로 initialValue를 increment만큼 증가시킴
    initialValue += increment;

    // // 만약 현재 값이 목표값보다 크면 최종 값에 +를 붙이고 타이머 종료
    if (initialValue > value) {
      el.textContent = `${value}+`;
      // 타이머 종료
      clearInterval(increaseCount);
      return;
    }

    // 텍스트 내용 업데이트
    el.textContent = `${initialValue}+`;
  }, 1);
  // console.log(increaseCount);
};

// 배열에 있는 각 요소에 대해 updateCount 함수 호출
items.forEach((item) => {
  updateCount(item);
});
