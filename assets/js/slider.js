document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".project-slider");
  if (!slider) return;
  const cards = Array.from(slider.querySelectorAll(".project-card"));
  
  let visibleCount;

  let startIndex = 0;

  function setVisibleCount() {
    if (window.innerWidth <= 768) {
      visibleCount = 1;
    } else {
      visibleCount = 3;
    }
  }

  function renderCarousel() {
    slider.innerHTML = "";
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % cards.length;
      slider.appendChild(cards[index]);
    }
  }

  setVisibleCount();
  renderCarousel();

  window.addEventListener('resize', () => {
    setVisibleCount();
    renderCarousel();
  });

  window.slideProjects = function (direction) {
    if (direction === 1) {
        startIndex = (startIndex + 1) % cards.length;
    } else if (direction === -1) {
        startIndex = (startIndex - 1 + cards.length) % cards.length;
    }
    renderCarousel();
  };
});