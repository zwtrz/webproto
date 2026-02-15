const body = document.body;

const overlay = document.getElementById("overlay");
const leftSidebar = document.getElementById("leftSidebar");
const rightSidebar = document.getElementById("rightSidebar");

function setAria(open) {
  leftSidebar.setAttribute("aria-hidden", String(!open));
  rightSidebar.setAttribute("aria-hidden", String(!open));
  overlay.hidden = !open;
}

window.addEventListener("load", () => {
  // Title fade-in duration = 600ms (CSS)
  // Wait: 600ms (fade) + 500ms (extra delay) = 1100ms
  const totalDelayMs = 1100;

  setAria(false);

  setTimeout(() => {
    body.classList.add("auto-sidebars");
    setAria(true);
  }, totalDelayMs);
});