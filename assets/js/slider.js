document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".project-slider");
  const cards = Array.from(slider.querySelectorAll(".project-card"));
  const visibleCount = 3;

  let startIndex = 0;

  function renderCarousel() {
    slider.innerHTML = "";
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % cards.length;
      slider.appendChild(cards[index]);
    }
  }

  renderCarousel();

  // attach globally so buttons can call it
  window.slideProjects = function (direction) {
    if (direction === 1) {
        // previously moved right; now moves left
        startIndex = (startIndex + 1) % cards.length;
    } else if (direction === -1) {
        // previously moved left; now moves right
        startIndex = (startIndex - 1 + cards.length) % cards.length;
    }
    renderCarousel();
    };
});
