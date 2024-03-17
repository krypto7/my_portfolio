function toggleMenu() {
  const icon = document.querySelector(".hamberg-icon");
  const menu = document.querySelector(".menu-list");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
