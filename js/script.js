function initScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowMetade = window.innerHeight * 0.6;
  function activeScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      }
    });
    console.log("scroll");
  }
  window.addEventListener("scroll", activeScroll);
}
initScroll();

const menuMobile = document.querySelector(".menu-mobile");
const menu = document.querySelector(".header-menu");
function toggleMenu() {
  menu.classList.toggle("active");
}
menuMobile.addEventListener("click", toggleMenu);
