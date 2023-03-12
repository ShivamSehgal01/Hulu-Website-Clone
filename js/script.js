let btn = document.getElementById("menu-btn");
let nav = document.getElementById("mobile-nav");

btn.addEventListener("click", toogleMenu);

function toogleMenu() {
  btn.classList.toggle("open");
  nav.classList.toggle("mobile-nav-open");
  document.body.classList.toggle("no-scroll");
}
