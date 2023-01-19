let burgerIcon = document.getElementById("burger-menu");
let headerLinks = document.getElementById("header__links");

burgerIcon.addEventListener("click", () => {
  if (headerLinks.classList.contains("links__revealed")) {
    headerLinks.classList.remove("links__revealed");
  } else {
    headerLinks.classList.add("links__revealed");
  }
});
