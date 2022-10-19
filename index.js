const navbarToggle = document.getElementById("navbar-toggle");
const navbarItems = document.querySelector(".nav-items");


navbarToggle.addEventListener("click", () =>{
  navbarToggle.classList.toggle("active");
  navbarItems.classList.toggle("active");
})

