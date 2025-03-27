window.addEventListener("scroll", () => {
  const navbar = document.querySelector("header");
  navbar.classList.toggle("sticky", window.scrollY > 50);
});
const navbar = document.querySelector(".navbar ul");
const menuIcon = document.querySelector(".bx-menu");
const navlnk = document.querySelectorAll(".navlnk");
menuIcon.addEventListener("click", function() {
    navbar.classList.toggle("active");
});


navlnk.forEach(lnk => {
lnk.addEventListener("click", 
    () => {
        navbar.classList.remove("active"); 
    }
)
});
document.addEventListener("click", function(event) {
if (event.target.closest(".navbar") === null && event.target !== menuIcon) {
  navbar.classList.remove("active");
}

});

  

  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide() {
    slides.forEach((slide, index) => {
      slide.style.opacity = index === currentSlide ? '1' : '0';
    });
    currentSlide = (currentSlide + 1) % slides.length;
  }

  setInterval(showSlide, 5000);

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



  

  




        

        
