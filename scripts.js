window.addEventListener("scroll", () => {
  const navbar = document.querySelector("header");
  navbar.classList.toggle("sticky", window.scrollY > 50);
});
document.getElementById("menuToggle").addEventListener("click", function() {
  const navbar = document.querySelector(".nav-bar ul");
  const menuIcon = document.querySelector(".bx-menu");
  const closeIcon = document.querySelector(".bx-x");
  navbar.classList.toggle("active");
  menuIcon.style.display = menuIcon.style.display === "none" ? "block" : "none";
  closeIcon.style.display = closeIcon.style.display === "none" ? "block" : "none";
  // Close menu when clicking outside the nav list
document.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
    navbar.classList.remove('active');
   }
  }
});
});

  

  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide() {
    slides.forEach((slide, index) => {
      slide.style.opacity = index === currentSlide ? '1' : '0';
    });
    currentSlide = (currentSlide + 1) % slides.length;
  }

  setInterval(showSlide, 1000);

// Smooth Scrolling
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });

    document.getElementById("readMoreBtn").addEventListener("click", function() {
      const moreText = document.getElementById("moreText");
      const btn = document.getElementById("readMoreBtn");

      if (moreText.style.display === "none") {
          moreText.style.display = "inline";
          btn.textContent = "Read Less";

      } else{
          moreText.style.display = "none";
          btn.textContent = "Read More";
      }
  });

    // Form Validation
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
event.preventDefault();

// Collect form data
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

// Basic validation
if (!name || !email || !message) {
    alert("Please fill out all the fields.");
    return;
}

alert(`Thank you! ${name} Your message has been sent.`);

event.target.reset();
});



  

  




        

        
