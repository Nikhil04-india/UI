// Add interaction: show which plan is clicked
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert(`🎉 You selected the ${button.parentElement.querySelector("h2").textContent} Plan!`);
  });
});
