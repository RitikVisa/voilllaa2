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
  

  
// hero section animation

// GreenSock Animation Timeline for various sections
const mainSectionTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: "60% 60%",
      end: "200% 60%",
      scrub: 1,
      pin: true,
    }
  });


  mainSectionTimeline.to(".tab", { height: "800vh", width: "850vw" }, "a")
  .to(".herologo", { top: "30%", width: "40%", opacity: "1" }, "a")
  .to("#crafting", { delay: 0, strokeDashoffset: "0" })
  .to(".hand-bulb", { opacity: "1", left: "42.5%", transform: "translateX(-50%)", opacity: "100%", top: "50%", scale: "4", delay: 2 }, "a")
  .to("#brandSvg", { delay: 1, strokeDashoffset: "0" })
  .to("#imSvg", { delay: 1, strokeDashoffset: "0" })
  
// banner section animation 

// Function to animate numbers
function animateNumbers(targetElement) {
    const target = targetElement.dataset.target;
    const increment = target / 100; // Adjust the speed of the animation here
    let current = 0;
  
    const animationInterval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(animationInterval);
      }
      targetElement.textContent = Math.floor(current);
    }, 15); // Adjust the interval for smoother animation
  }
  
  // Function to handle intersection of the banner section
  function handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start animating the numbers
        const numberElements = document.querySelectorAll('[data-target]');
        numberElements.forEach((element) => {
          animateNumbers(element);
        });
      }
    });
  }
  
  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.2, // Trigger when 20% of the banner section is visible
  });
  
  // Observe the banner section
  const bannerSection = document.querySelector('.banner-section');
  observer.observe(bannerSection);
  


//   progress bar animation

// Function to animate progress bars
function animateProgressBar(entry) {
    const progressBar = entry.target.querySelector(".progress-bar");
    const targetWidth = progressBar.getAttribute("data-width");
    progressBar.style.width = "0%"; // Reset width to 0%
    
    // Use requestAnimationFrame for smoother animation
    function step(timestamp) {
      const currentWidth = parseFloat(progressBar.style.width) || 0;
      const widthDiff = (parseFloat(targetWidth) - currentWidth) * 0.08; // Adjust the animation speed here
      
      if (currentWidth < parseFloat(targetWidth)) {
        progressBar.style.width = (currentWidth + widthDiff) + "%";
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
  }
  
  // Create an Intersection Observer
  const progressBarObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProgressBar(entry);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2, // Adjust this threshold value as needed
  });
  
  // Observe each progress bar
  const progressBars = document.querySelectorAll(".progress");
  progressBars.forEach((bar) => {
    progressBarObserver.observe(bar);
  });
  

//   gallery section

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
  

     // slider animation
     const slides = document.querySelectorAll('.slide');
     const prevBtn = document.querySelector('.prev-btn');
     const nextBtn = document.querySelector('.next-btn');
     
     let currentIndex = 0;
     
     function showSlide(index) {
       slides.forEach((slide, i) => {
         if (i === index) {
           slide.style.display = 'block';
         } else {
           slide.style.display = 'none';
         }
       });
     }
     
     function prevSlide() {
       currentIndex--;
       if (currentIndex < 0) {
         currentIndex = slides.length - 1;
       }
       showSlide(currentIndex);
     }
     
     function nextSlide() {
       currentIndex++;
       if (currentIndex >= slides.length) {
         currentIndex = 0;
       }
       showSlide(currentIndex);
     }
     
     prevBtn.addEventListener('click', prevSlide);
     nextBtn.addEventListener('click', nextSlide);
     
     // Show the initial slide (you can set this to the desired starting index)
     showSlide(currentIndex);
     
     // Automatically advance to the next slide
     function autoSlide() {
       nextSlide();
       setTimeout(autoSlide, 3000); // Change slide every 3 seconds (adjust as needed)
     }
     
     autoSlide(); // Start the auto-slide loop
     