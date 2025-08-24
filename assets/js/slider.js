document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".project-slider");
  const cards = Array.from(slider.querySelectorAll(".project-card"));
  
  // A variable to hold the number of visible cards
  let visibleCount; // <-- This is a new variable

  let startIndex = 0;

  // NEW FUNCTION to set the number of visible cards based on screen width
  function setVisibleCount() {
    if (window.innerWidth <= 768) {
      visibleCount = 1; // <-- Changes the number for mobile screens
    } else {
      visibleCount = 3; // Or whatever number you want for larger screens
    }
  }

  // Function to render the carousel
  function renderCarousel() {
    slider.innerHTML = "";
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % cards.length;
      slider.appendChild(cards[index]);
    }
  }

  // Initial setup on page load
  setVisibleCount(); // <-- New function call
  renderCarousel();

  // NEW EVENT LISTENER to re-run the functions when the window is resized
  window.addEventListener('resize', () => {
    setVisibleCount();
    renderCarousel();
  });

  // Attach globally so buttons can call it
  window.slideProjects = function (direction) {
    if (direction === 1) {
        startIndex = (startIndex + 1) % cards.length;
    } else if (direction === -1) {
        startIndex = (startIndex - 1 + cards.length) % cards.length;
    }
    renderCarousel();
  };
});