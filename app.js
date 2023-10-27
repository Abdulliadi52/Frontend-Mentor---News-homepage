const navBar = document.getElementById("nav-bar");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

openBtn.addEventListener("click", function () {
  navBar.classList.add("active");
});
closeBtn.addEventListener("click", function () {
  navBar.classList.remove("active");
});
console.log(navBar);
console.log(openBtn);
console.log(closeBtn);
