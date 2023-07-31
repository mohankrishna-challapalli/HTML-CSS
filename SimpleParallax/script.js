const parallaxContainer = document.querySelector(".parallax-container");

function parallaxEffect() {
  const yOffset = window.pageYOffset;
  const layers = document.querySelectorAll(".parallax-layer");

  layers.forEach((layer, index) => {
    const speed = index * 0.2;
    const yPos = -yOffset * speed;
    layer.style.transform = `translateY(${yPos}px)`;
  });
}

window.addEventListener("scroll", parallaxEffect);
