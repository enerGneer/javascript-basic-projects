const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const rgbColor = "Rgba(" + getRandomNumber() + "," + getRandomNumber() + "," + getRandomNumber() + ")";

  color.textContent = rgbColor;
  document.body.style.backgroundColor = rgbColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}
