// // Function to toggle the navbar background color and element colors on scroll
// window.addEventListener("scroll", function () {
//     var navbar = document.getElementById("navbar");
//     var navLinks = document.querySelectorAll("#nav-middle a");
//     var contactBtn = document.querySelector(".contact-btn");
//     var socialIcons = document.querySelectorAll(".social-icon span"); // Select all social icons
//     var scrollY = window.scrollY;
  
//     if (scrollY > 0) {
//       navbar.style.backgroundColor = "#ffffff";
//       navLinks.forEach(function (link) {
//         link.style.color = "#520088";
//       });
//       contactBtn.style.backgroundColor = "#520088";
//       contactBtn.style.color = "#ffffff";
//       socialIcons.forEach(function (icon) {
//         icon.style.color = "#520088"; // Change icon color
//       });
//       document.querySelector(".nav-logo").style.visibility = "visible";
//       document.querySelector(".nav-logo2").style.visibility = "hidden";
//     } else {
//       navbar.style.backgroundColor = "transparent";
//       navLinks.forEach(function (link) {
//         link.style.color = "white";
//       });
//       contactBtn.style.backgroundColor = "white";
//       contactBtn.style.color = "black";
//       socialIcons.forEach(function (icon) {
//         icon.style.color = "white"; // Change icon color
//       });
//       document.querySelector(".nav-logo").style.visibility = "hidden";
//       document.querySelector(".nav-logo2").style.visibility = "visible";
//     }
//   });

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



  
  let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-item img');

function openOverlay(element) {
    const src = element.querySelector('img').src;
    currentImageIndex = Array.from(images).findIndex(img => img.src === src);
    document.getElementById('overlay-image').src = src;
    document.getElementById('overlay').style.display = 'flex';
    event.stopPropagation();
}

function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}

function navigateOverlay(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    document.getElementById('overlay-image').src = images[currentImageIndex].src;
    event.stopPropagation();
}

document.getElementById('overlay').addEventListener('click', closeOverlay);