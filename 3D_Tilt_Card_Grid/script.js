const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  const content = card.querySelector(".card-content");
  const img = card.querySelector(".product-img");

  card.addEventListener("mousemove", (e) => {
    let rect = card.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    let rotateX = ((y / rect.height) - 0.5) * 20;
    let rotateY = ((x / rect.width) - 0.5) * -20;

    content.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    img.style.transform = `translateZ(50px)`;
  });

  card.addEventListener("mouseleave", () => {
    content.style.transform = "rotateX(0deg) rotateY(0deg)";
    img.style.transform = "translateZ(0)";
  });
});
