const hamburguer = document.querySelector(".menu");
const show = document.querySelector(".menu__lista");

hamburguer.addEventListener("click", function () {
  show.classList.toggle("show");
});
