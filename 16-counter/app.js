function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`Please check "${selection}" selector, no such element exists`);
}

function Counter(element, value) {
  // element는 받아온 HTML 요소 (카운터 기능 가질 것)
  this.counter = element;
  // 카운터 초기값을 this.value에 저장
  this.value = value;
  // 카운터 초기화 버튼 요소 저장
  this.resetBtn = element.querySelector(".reset");
  // 카운터 값 증가 버튼 요소 저장
  this.increaseBtn = element.querySelector(".increase");
  // 카운터 값 감소 버튼 요소 저장
  this.decreaseBtn = element.querySelector(".decrease");
  // 화면에 카운터 값 표시 요소
  this.valueDOM = element.querySelector(".value");
  // 화면에 카운터 초기값을 표시
  this.valueDOM.textContent = this.value;

  // bind this to all function
  // 각메소드의 this를 Counter 객체에 bind. increase메소드가 어디에서 호출되든 this는 항상 Counter 객체를 가리킨다
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  // 이벤트 리스너. 버튼이 클릭되면 this.method의 메소드가 호출됨.
  this.increaseBtn.addEventListener("click", this.increase);
  this.decreaseBtn.addEventListener("click", this.decrease);
  this.resetBtn.addEventListener("click", this.reset);
}

Counter.prototype.increase = function () {
  // prototype 프로토타입 기반 상속. Counter라는 생성자 함수의 프로토타입 객체에 increase라는 메소드를 추가한다.
  this.value++;
  this.valueDOM.textContent = this.value;
  // this.value를 증가시키고 그 값을 화면에 표시한다. this는 Counter 인스턴스를 가리킨다. bind(this)되어있으므로!
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};

// 아래 코드는 Counter 객체를 생성하고 초기화하는 역할을 한다.
const firstCounter = new Counter(getElement(".first-counter"), 100);
// new로 Counter 생성자 함수를 호출하여 새로운 Counter 객체를 생성한다. 생성자 함수에는 두 개의 인자가 전달된다(first-counter HTML요소랑 초기값 100) 이렇게 생성된 객체는 firstCounter 상수에 할당된다. firstCounter 객체는 Counter의 모든 메소드를 사용할 수 있다.
// 즉 카운터 기능을 추가하고 초기값을 100으로 설정하는 것.
// firstCounter.increase() 등으로 카운터 값 조작 가능
const secondCounter = new Counter(getElement(".second-counter"), 200);
