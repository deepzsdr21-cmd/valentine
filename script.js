const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200;
  const y = Math.random() * 20;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
