// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika diandras-menu diklik
document.querySelector("#pmenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menutup nav
const diandras = document.querySelector("#pmenu");

document.addEventListener("click", function (e) {
  if (!diandras.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
