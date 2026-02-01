const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const popup = document.getElementById("popup");

let moving = false;

noBtn.addEventListener("mouseenter", () => {
  moving = true;

  // unlock position so JS can move it
  noBtn.style.bottom = "auto";
  noBtn.style.right = "auto";

  moveNo();
});

noBtn.addEventListener("mouseleave", () => {
  moving = false;

  // reset to original position
  noBtn.style.left = "auto";
  noBtn.style.top = "auto";
  noBtn.style.bottom = "40px";
  noBtn.style.right = "40px";
});

function moveNo() {
  if (!moving) return;

  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  setTimeout(moveNo, 120); // speed of movement
}

yesBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});
