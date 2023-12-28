const setDrink = (section) => {
  // 각 drink 항목 클릭 시 이벤트 리스너
  section.addEventListener("click", function (e) {
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    // JSON.stringify JSON.parse
    // 클릭된 drink ID를 로컬 스토리지에 저장
    localStorage.setItem("drink", id);
  });
};

export default setDrink;
