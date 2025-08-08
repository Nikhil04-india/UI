const profileBtn = document.getElementById("profileBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

profileBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdownMenu.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (dropdownMenu.classList.contains("active")) {
    dropdownMenu.classList.remove("active");
  }
});

dropdownMenu.addEventListener("click", function (e) {
  e.stopPropagation();
});
