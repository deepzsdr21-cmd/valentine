const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const popup = document.getElementById("popup");

let hoverInterval;
let scale = 1;

noBtn.addEventListener("mouseenter", () => {
  document.body.classList.add("shake");

  hoverInterval = setInterval(() => {
    scale -= 0.05;
    if (scale < 0.4) scale = 0.4;

    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.style.transform = `scale(${scale})`;
  }, 120);
});

noBtn.addEventListener("mouseleave", () => {
  clearInterval(hoverInterval);
  scale = 1;

  noBtn.style.transform = "scale(1)";
  noBtn.style.bottom = "40px";
  noBtn.style.right = "40px";

  document.body.classList.remove("shake");
});

yesBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});
