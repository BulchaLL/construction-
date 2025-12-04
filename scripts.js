window.addEventListener("scroll", () => {
  const navbar = document.querySelector("header");
  navbar.classList.toggle("sticky", window.scrollY > 50);
});
const navbar = document.querySelector(".navbar ul");
const menuIcon = document.querySelector(".bx-menu");
const closeIcon = document.querySelector(".bx-x");
const navlnk = document.querySelectorAll(".navlnk");
menuIcon.addEventListener("click", function() {
    navbar.classList.toggle("active");
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
});
closeIcon.addEventListener("click", function() {
    navbar.classList.remove("active");
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
});


navlnk.forEach(lnk => {
lnk.addEventListener("click", 
    () => {
        navbar.classList.remove("active"); 
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    }
)
});
document.addEventListener("click", function(event) {
if (event.target.closest(".navbar") === null && event.target !== menuIcon) {
  navbar.classList.remove("active");
  closeIcon.style.display = 'none';
  menuIcon.style.display = 'block';
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
const counters = document.querySelectorAll('.counter');
const speed = 150;

const startCounting = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
};

let started = false;

window.addEventListener('scroll', () => {
  const statsTop = document.querySelector('.about-stats').offsetTop;
  const scrollPos = window.scrollY + window.innerHeight;

  if (scrollPos > statsTop && !started) {
    startCounting();
    started = true;
  }
});


  const images = document.querySelectorAll('.proj-card img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('#lightbox .close');
  images.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  } );

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = 'none';
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



  

  




        

        
