// #function for navLinks

const navLinks = document.querySelectorAll("nav a")
navLinks.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.forEach(e => e.classList.remove("active"));
    item.classList.add("active");
    nav.classList.remove("active")
  })
})

const nav = document.querySelector(".nav-container");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const navLink = document.querySelectorAll("nav a");

function toggleMenu() {
  nav.classList.toggle("active");
  burger.classList.toggle("open");
  overlay.classList.toggle("active");
}

navLink.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    burger.classList.remove("open");
    overlay.classList.remove("active");
  });
});