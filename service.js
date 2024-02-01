window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var scrollY = window.scrollY;

  if (scrollY > 0) {
    navbar.classList.add("sticky"); /* Add sticky class */
  } else {
    navbar.classList.remove("sticky"); /* Remove sticky class */
  }
});



// toggle dropdown menu animation

const toggleBtn = document.querySelector(".toggle-btn");
const dropdown = document.querySelector(".dropdown_menu");
const menuIcon = document.getElementById("menu");

function toggleDropdownVisibility() {
if (window.innerWidth <= 768) {
  // Toggle the visibility of the dropdown
  dropdown.style.visibility = dropdown.style.visibility === "hidden" ? "visible" : "hidden";
  
  // Toggle between "fa-bars" and "fa-xmark" classes
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
} else {
  // Hide the dropdown if the screen size is larger than 768px
  dropdown.style.visibility = "hidden";
  // Always show the "fa-bars" icon on larger screens
  menuIcon.classList.remove("fa-xmark");
  menuIcon.classList.add("fa-bars");
}
}

toggleBtn.onclick = function () {
toggleDropdownVisibility();
};

// Handle window resize events to hide the dropdown if necessary
window.addEventListener("resize", toggleDropdownVisibility);

// Initial check on page load
toggleDropdownVisibility();





// slider animation below
let currentSlide = 0;
      const slides = document.querySelectorAll(".slide");
      const buttons = document.querySelectorAll(".button"); // Get all buttons

      function showSlide(index) {
        slides.forEach((slide) => slide.classList.remove("active"));
        slides[index].classList.add("active");

        // Reset and re-trigger button animation
        buttons.forEach((button) => {
          // Remove any inline style to reset animation
          button.style.animation = "none";
          // Trigger reflow/repaint
          void button.offsetHeight;
          // Re-apply animation
          button.style.animation = "";
        });

        const overlayTexts = document.querySelectorAll(".overlay-text");
        overlayTexts.forEach((text) => {
          text.classList.remove("animate-text");
          void text.offsetWidth;
          text.classList.add("animate-text");
        });
      }

      function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }

      function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      }

      setInterval(nextSlide, 4000); // Change slide every 3 seconds

