const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const popup = document.getElementById("popup");

let scale = 1;

noBtn.addEventListener("mouseenter", () => {
  scale -= 0.15;

  if (scale <= 0.2) {
    noBtn.style.display = "none";
    return;
  }

  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.transform = `scale(${scale})`;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

document.addEventListener("mousemove", () => {
  if (scale <= 0.2) {
    noBtn.style.display = "block";
    scale = 1;
    noBtn.style.transform = "scale(1)";
    noBtn.style.bottom = "40px";
    noBtn.style.right = "40px";
  }
});

yesBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});
