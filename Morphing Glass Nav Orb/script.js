const orb = document.getElementById("orb");
const menu = document.getElementById("orbitMenu");
const links = menu.querySelectorAll("a");

orb.addEventListener("click", () => {
  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    // Spread links around circle
    const angleStep = (2 * Math.PI) / links.length;
    links.forEach((link, i) => {
      const angle = i * angleStep;
      const x = 100 * Math.cos(angle);
      const y = 100 * Math.sin(angle);
      link.style.transform = `translate(${x}px, ${y}px)`;
    });
  } else {
    // Reset back to center
    links.forEach(link => {
      link.style.transform = "translate(0,0)";
    });
  }
});
