const body = document.getElementById("body");
const themeButton = document.getElementById("changeThemeButton");
const test = 0;
themeButton.addEventListener("click", function () {
  const bgColor = themeRGBColor();
  body.style.backgroundColor = bgColor;
});

function themeRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}
