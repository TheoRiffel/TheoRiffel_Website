function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// SMOOTH PARALLAX LOGIC
let currentScroll = 0;
let targetScroll = 0;
const lerpAmount = 0.35;

function updateParallax() {
  currentScroll += (targetScroll - currentScroll) * lerpAmount;
  const textElement = document.querySelector("#profile .section__text");
  if (textElement) {
    textElement.style.transform = `translateY(${currentScroll * 0.4}px)`;
  }
  requestAnimationFrame(updateParallax);
}

requestAnimationFrame(updateParallax);

window.addEventListener("scroll", function() {
  targetScroll = window.scrollY;
});

// PARTICLES.JS CONFIGURATION
if (document.getElementById('particles-js')) {
  particlesJS('particles-js', {
    "particles": {
      "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#ffffff" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.25, "random": false },
      "size": { "value": 3, "random": true },
      "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.25, "width": 1 },
      "move": { "enable": true, "speed": 0.8, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
      "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
    },
    "retina_detect": true
  });
}
