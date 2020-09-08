let headerNav = document.querySelector("header nav");
let burger = document.querySelector(".burger");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");

burger.addEventListener("click", () => {
  headerNav.classList.toggle("header-pop");
  line1.classList.toggle("arrow-change");
  line2.classList.toggle("arrow-change");
});
