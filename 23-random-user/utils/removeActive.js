// 내보내기와 함수 선언을 동시에
export default function removeActive(items) {
  // active 클래스 제거
  items.forEach((btn) => btn.classList.remove("active"));
}
