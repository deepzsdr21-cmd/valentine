const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const popup = document.getElementById("popup");
const area = document.querySelector(".button-area");

noBtn.addEventListener("mouseenter", () => {
  const areaWidth = area.clientWidth;
  const areaHeight = area.clientHeight;

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = areaWidth - btnWidth;
  const maxY = areaHeight - btnHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});
