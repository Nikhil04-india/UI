const testimonials = document.querySelectorAll(".testimonial");
const dotsContainer = document.getElementById("dots");
let currentIndex = 0;
let interval;

// Create dots dynamically
testimonials.forEach((_, i) => {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    showTestimonial(i);
    resetAutoRotate();
  });
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("button");

// Show testimonial
function showTestimonial(index) {
  testimonials[currentIndex].classList.remove("active");
  dots[currentIndex].classList.remove("active");

  currentIndex = index;

  testimonials[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");
}

// Auto-rotate (every 2s)
function startAutoRotate() {
  interval = setInterval(() => {
    let nextIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(nextIndex);
  }, 2000); // ✅ now every 2 seconds
}

function stopAutoRotate() {
  clearInterval(interval);
}

function resetAutoRotate() {
  stopAutoRotate();
  startAutoRotate();
}

// Start
startAutoRotate();

// Pause on hover
document.getElementById("slider").addEventListener("mouseenter", stopAutoRotate);
document.getElementById("slider").addEventListener("mouseleave", startAutoRotate);
