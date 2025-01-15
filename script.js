const headerNav = document.querySelector(".header__nav");
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".menu__close");
const links = document.querySelectorAll(".header__link");

function openMenu() {
  headerNav.classList.add("menu-open");
}
function closeMenu() {
  headerNav.classList.remove("menu-open");
}

menuBtn.onclick = openMenu;
closeBtn.onclick = closeMenu;

links.forEach(function (link) {
  link.onclick = closeMenu;
});
