const getElement = (selection) => {
  const element = document.querySelector(selection);
  // 매개변수로 받아온 css 선택자가 있는지 확인. 있으면 해당 요소 return
  if (element) return element;
  // 없으면 에러메세지 띄움
  throw new Error("no element selected");
};

export default getElement;
