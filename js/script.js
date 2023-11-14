
const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
  menu.classList.remove("active");
  navMenu.classList.remove("active");
}))

const start = document.getElementById("start");
const about = document.getElementById("about");
const adopt = document.getElementById("adopt");
const donate = document.getElementById("donate");
const contact = document.getElementById("contact");

start.onclick = function() {
  window.scrollTo(0, 0);
}

about.onclick = function() {
  window.scrollTo(0, 600);
}

adopt.onclick = function() {
  window.scrollTo(0, 1650);
}

donate.onclick = function() {
  window.scrollTo(0, 3800);
}