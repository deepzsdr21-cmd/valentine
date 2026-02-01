const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const popup = document.getElementById("popup");

let scale = 1;
let moving = false;

noBtn.addEventListener("mouseover", () => {
  if (moving) return;
  moving = true;

  // remove bottom/right so left/top can work
  noBtn.style.bottom = "auto";
  noBtn.style.right = "auto";

  document.body.classList.add("shake");

  moveNo();
});

function moveNo() {
  if (!moving) return;

  scale -= 0.05;
  if (scale < 0.4) scale = 0.4;

  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  noBtn.style.transform = `scale(${scale})`;

  setTimeout(moveNo, 120);
}

noBtn.addEventListener("mouseout", () => {
  moving = false;
  scale = 1;

  noBtn.style.transform = "scale(1)";
  noBtn.style.bottom = "40px";
  noBtn.style.right = "40px";
  noBtn.style.left = "auto";
  noBtn.style.top = "auto";

  document.body.classList.remove("shake");
});

yesBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});
