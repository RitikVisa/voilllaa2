// Constants
const slides = document.querySelectorAll(".slide");
const buttons = document.querySelectorAll(".button");
const overlayTexts = document.querySelectorAll(".overlay-text");
const progressBarElements = document.querySelectorAll('.progress-bar');
const numbers = document.querySelector('.banner-section .numbers');
const screenWidth = window.innerWidth;


// navbar all animation below
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



// Function to animate progress bar
function animateProgressBar(progressBar, width) {
  progressBar.style.width = "0";
  setTimeout(() => progressBar.style.width = width, 100);
}

// Function to animate numbers
function animateNumber(element, start, end, duration) {
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = Math.easeInOutQuad(timeElapsed, start, end - start, duration);
    element.innerText = Math.round(run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

// Easing function for smooth animation
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

// Intersection Observer to trigger animations on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      progressBarElements.forEach(bar => animateProgressBar(bar, bar.getAttribute('data-width')));
      if (entry.target.classList.contains('banner-section')) {
        const numbersToAnimate = numbers.querySelectorAll('h2');
        numbersToAnimate.forEach(num => animateNumber(num, 0, parseInt(num.getAttribute('data-target'), 10), 2000));
      }
    }
  });
}, { threshold: 0.6 });

observer.observe(document.querySelector('.banner'));

// GreenSock Animation Timeline for various sections
const mainSectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "60% 60%",
    end: "200% 60%",
    scrub: 1,
    pin: true,
  }
});

mainSectionTimeline.to(".image", { height: "800vh", width: "850vw" }, "a")
  .to(".herologo", { top: "30%", width: "40%", opacity: "1" }, "a")
  .to("#mainImg", { filter: "blur(10px) grayscale(0%)" }, "a")
  // .to("#navbar", { backgroundColor: "#fff" }, "a");

// if (screenWidth >= 769 && screenWidth <= 1024) {
//   mainSectionTimeline.to(".hand-bulb", { opacity: "1", left: "37.55%", transform: "translateX(-50%)", opacity: "100%", top: "50%", scale: "4", delay: 2 })
//     .to("#mainH1-2", { top: "45%", left: "50%", fontSize: "1.5rem", opacity: "1" }, "a")
//     .to(".herologo", { top: "37%", width: "40%", opacity: "1" }, "a");
// } else {
 
// }
mainSectionTimeline.to(".hand-bulb", { opacity: "1", left: "42.5%", transform: "translateX(-50%)", opacity: "100%", top: "50%", scale: "4", delay: 2 }, "a")
.to("#mainH1-2", { top: "45%", left: "40%", fontSize: "2rem", opacity: "1" }, "a");

mainSectionTimeline.to(".main-p", { top: "58%", fontSize: "1.5rem", left: "50%", opacity: "0", delay: 1 }, "a")
  .to("#crafting", { delay: 1, strokeDashoffset: "0" })
  .to("#brandSvg", { delay: 1, strokeDashoffset: "0" })
  .to("#imSvg", { delay: 1, strokeDashoffset: "0" })
  .to(".banner-section", { delay: 1 });

// GreenSock Animation Timeline for video section
const videoSectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".video-section",
    start: "20% 60%",
    end: "60% 60%",
    scrub: 1,
    pin: true,
  }
});

videoSectionTimeline.to(".video-img", { marginTop: "0%", transform: "scale(1.2)", opacity: "1" }, "a")
  .to(".video-section .right h1", { left: "0%", opacity: "1" }, "a")
  .to(".right p", { opacity: "1", left: "10%" }, "a")
  .to(".right-1-inner", { opacity: "1", left: "5%", bottom: "20%" }, "a")
  .to(".right-1-inner img", { opacity: "1", marginRight: "1rem", height: "4rem" }, "a");

// GreenSock Animation Timeline for main slideshow section
const mainSlideshowTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#main-slideshow",
    start: "50% 60%",
    end: "100% 60%",
    scrub: 1,
    pin: true,
  }
});

mainSlideshowTimeline.to(".slideshow", { left: "0%" }, "c")
  .to(".slideshow2", { left: "10%" }, "c");

// Get the total length of the crafting SVG path
const svgPath = document.getElementById("crafting").querySelector("path");
const totalLength = svgPath.getTotalLength();
console.log("Total Length of Path:", totalLength);


// window.addEventListener('scroll', function() {
//   var navbar = document.getElementById('navbar');
//   if (window.pageYOffset > 0) {
//       navbar.classList.add('sticky');
//   } else {
//       navbar.classList.remove('sticky');
//   }
// });


// Function to increment numbers
function animateNumbers(targetElement) {
  const target = parseInt(targetElement.dataset.target);
  let current = 0;
  const increment = 4; // You can adjust the increment value as needed

  const interval = setInterval(() => {
    if (current >= target) {
      clearInterval(interval);
    } else {
      current += increment;
      targetElement.innerText = current.toLocaleString(); // Format the number as needed
    }
  }, 50); // Adjust the interval duration as needed
}

// Initialize Intersection Observer
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const numberElement = entry.target.querySelector("h2[data-target]");
      animateNumbers(numberElement);
      observer1.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5, // Adjust the threshold as needed
});

// Observe each number-item
const numberItems = document.querySelectorAll(".number-item");
numberItems.forEach((item) => {
  observer1.observe(item);
});


// let currentSlide = 0;
//       const slides = document.querySelectorAll(".slide");
//       const buttons = document.querySelectorAll(".button"); // Get all buttons

//       function showSlide(index) {
//         slides.forEach((slide) => slide.classList.remove("active"));
//         slides[index].classList.add("active");

//         // Reset and re-trigger button animation
//         buttons.forEach((button) => {
//           // Remove any inline style to reset animation
//           button.style.animation = "none";
//           // Trigger reflow/repaint
//           void button.offsetHeight;
//           // Re-apply animation
//           button.style.animation = "";
//         });

//         const overlayTexts = document.querySelectorAll(".overlay-text");
//         overlayTexts.forEach((text) => {
//           text.classList.remove("animate-text");
//           void text.offsetWidth;
//           text.classList.add("animate-text");
//         });
//       }

//       function nextSlide() {
//         currentSlide = (currentSlide + 1) % slides.length;
//         showSlide(currentSlide);
//       }

//       function prevSlide() {
//         currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//         showSlide(currentSlide);
//       }

//       setInterval(nextSlide, 4000); // Change slide every 3 seconds



//     // progress bar animation
//     // Function to start progress bar animation
// function animateProgressBar(progressBar, width) {
//   progressBar.style.width = 0;
//   setTimeout(() => {
//       progressBar.style.width = width;
//   }, 100);
// }

// // Intersection Observer to trigger animation on scroll
// let observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//       if (entry.isIntersecting) {
//           document.querySelectorAll('.progress-bar').forEach(bar => {
//               const width = bar.getAttribute('data-width');
//               animateProgressBar(bar, width);
//           });
//       }
//   });
// }, { threshold: 0.6 });

// observer.observe(document.querySelector('.banner'));

// banner numbers animation
// function animateNumber(element, start, end, duration) {
//   let startTime = null;

//   function animation(currentTime) {
//       if (!startTime) startTime = currentTime;
//       const timeElapsed = currentTime - startTime;
//       const run = Math.easeInOutQuad(timeElapsed, start, end - start, duration);
//       element.innerText = Math.round(run);
//       if (timeElapsed < duration) requestAnimationFrame(animation);
//   }

//   requestAnimationFrame(animation);
// }

// // Get the width of the user's screen
// var screenWidth = window.innerWidth;

// // Output the screen width to the console
// console.log("Screen Width: " + screenWidth + " pixels");


// // Easing function for smooth animation
// Math.easeInOutQuad = function (t, b, c, d) {
//   t /= d / 2;
//   if (t < 1) return c / 2 * t * t + b;
//   t--;
//   return -c / 2 * (t * (t - 2) - 1) + b;
// };

// let observer1 = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//       if (entry.isIntersecting) {
//           const numbers = entry.target.querySelectorAll('.numbers h2');
//           numbers.forEach(num => {
//               const targetValue = parseInt(num.getAttribute('data-target'), 10);
//               animateNumber(num, 0, targetValue, 2000); // Duration in ms
//           });
//       }
//   });
// }, { threshold: 0.6 });

// observer1.observe(document.querySelector('.banner-section'));




// var tl3 = gsap.timeline({scrollTrigger:{
//     trigger:"#main",
//     start:"60% 60%",
//     end: "200% 60%",
//     scrub:1,
//     pin: true,
// }})

// tl3.to(".image",{
//     height:"800vh",
//     width:"850vw"
// },"a")
// .to(".herologo",{
//   top:"37%",
//   width:"40%",
//   opacity:"1"

// },"a")
// .to("#mainImg",{
 
//     filter: "blur(10px) grayscale(0%)" // Apply blur effect
   
// },"a")


// .to("#navbar",{
//   backgroundColor: "#fff"
// })

// // animation for 769 to 1024
// if (window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches) {
//   tl3.to(".hand-bulb", {
    
//     opacity: "1",
//     left: "37.55%",
//     transform: "translateX(-50%)",
//     opacity: "100%",
//     top: "50%",
//     scale: "4",
  
//     delay: 2// Add a delay of 0.5 seconds after the previous animation
//  // Adjust the duration as needed
//   })
//   .to("#mainH1-2",{
//     top:"45%",
//     left:"50%",
//     fontSize: "1.5rem",
//     opacity:"1",
   
  
//   },"a")
//   .to(".herologo",{
//     top:"37%",
//     width:"40%",
//     opacity:"1"

// },"a");
// }else{
//   tl3.to(".hand-bulb", {
//     opacity: "1",
//     left: "42.5%",
//     transform: "translateX(-50%)",
//     opacity: "100%",
//     top: "50%",
//     scale: "4",
  
//     delay: 2// Add a delay of 0.5 seconds after the previous animation
//   }, )
//   .to("#mainH1-2",{
//     top:"45%",
//     left:"50%",
//     fontSize: "1.5rem",
//     opacity:"1",
   
  
//   },"a")
  
// }



// tl3.to(".main-p",{
//   top:"58%",
//   fontSize: "1.5rem",
//   left:"50%",
//   opacity:"0",
//   delay: 2
// },"a")
// .to("#crafting", {
//   delay: 1,
//   strokeDashoffset:"0"
// })
// .to("#brandSvg", {
//   delay: 1,
//   strokeDashoffset:"0"
// })

// .to("#imSvg", {
//   delay: 1,
//   strokeDashoffset:"0"
// })
// .to(".banner-section", {
//   delay: 1
// })

// var tl = gsap.timeline({scrollTrigger:{
//   trigger:".video-section",
//   start:"50% 60%",
//   end: "80% 60%",
//   scrub:1,
//   pin: true,
// }})

// tl.to(".video-img",{
//   marginTop: "0%",
//   transform: "scale(1.2)",
//   opacity: "1"
// },"a")
// .to(".video-section .right h1",{
//   left: "0%",
//   opacity:"1"
// },"a")
// .to(".right p",{
//     opacity:"1",
//     left:"10%"
// },"a")
// .to(".right-1-inner",{
//   opacity:"1",
//   left:"5%",
//   bottom:"20%"
// },"a")
// .to(".right-1-inner img",{
//   opacity:"1",
//   marginRight:"1rem",
//   height:"4rem"
// },"a")






// var tl4 = gsap.timeline({scrollTrigger:{
//   trigger:"#main-slideshow",
//   start:"50% 60%",
//   end: "100% 60%",
//   scrub:1,
//   pin: true,
// }})

// tl4.to(".slideshow",{
// left: "0%"

// },"c")

// .to(".slideshow2",{
//   left: "10%"
// },"c")



// const svgPath = document.getElementById("crafting").querySelector("path");

// // Get the total length of the path
// const totalLength = svgPath.getTotalLength();

// // Output the total length to the console
// console.log("Total Length of Path:", totalLength);



