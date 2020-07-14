const hamburger = document.getElementById("hamb");
const nav = document.getElementById("side-nav");
const bg = document.getElementById("bg");

hamburger.addEventListener("click", () => {
  nav.classList.add("show");
  bg.classList.add("show-bg");
  nav.classList.remove("hide");
  bg.classList.remove("hide-bg");
});

bg.addEventListener("click", () => {
  nav.classList.add("hide");
  bg.classList.add("hide-bg");
  nav.classList.remove("show");
  bg.classList.remove("show-bg");
});
