// Wait for the page to fully load, then hide loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 2000); // Loader stays for 2s before showing content
});
