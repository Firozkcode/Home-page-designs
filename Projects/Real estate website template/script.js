const leadForm = document.getElementById('leadForm');
const toggleBtn = document.getElementById('toggleFormBtn');
const showFormBtn = document.getElementById('showFormBtn');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const header = document.querySelector('.main-header');


const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

toggleBtn.onclick = () => {
  leadForm.classList.add('hidden');
  showFormBtn.style.animationPlayState = 'running';
//   showFormBtn.style.display = 'block';
};

showFormBtn.onclick = () => {
  leadForm.classList.remove('hidden');
  showFormBtn.style.animationPlayState = 'paused';
//   showFormBtn.style.display = 'none';
};

showFormBtn.addEventListener('mouseover', () => {
  showFormBtn.style.animationPlayState = 'paused';
});

showFormBtn.addEventListener('mouseout', () => {
  showFormBtn.style.animationPlayState = 'running';
});

hamburger.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });


//   const slides = document.querySelectorAll(".slide");
//   const nextBtn = document.querySelector(".next");
//   const prevBtn = document.querySelector(".prev");
  const paginationDots = document.getElementById("paginationDots");
  
  let currentIndex = 0;
  
  // Create dots dynamically
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
    paginationDots.appendChild(dot);
  });
  
  const dots = document.querySelectorAll(".dot");
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
        dots[i].classList.add("active");
      }
    });
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }
  
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
  
  // Auto play every 5 seconds
  setInterval(nextSlide, 5000);
  
  // Initial display
  showSlide(currentIndex);
  
  const galleryImages = document.querySelectorAll('.gallery-img');
  const popup = document.getElementById('imagePopup');
  const popupImg = document.querySelector('.popup-img');
  const closeBtn = document.querySelector('.close-btn');
  const gCloseBtn = document.querySelector('.galary-close-btn');
  
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      popup.style.display = 'flex';
      popupImg.src = img.src;
    });
  });
  
  gCloseBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
  
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });

  
  function openVideo() {
    const videoUrl = "assets/Tour.mp4";
    document.getElementById("tourVideo").src = videoUrl;
    document.getElementById("videoPopup").style.display = "block";
  }
  
  function closeVideo() {
    document.getElementById("tourVideo").src = "";
    document.getElementById("videoPopup").style.display = "none";
  }
  
  

  function openPopup() {
    document.getElementById("popupForm").style.display = "flex";
    document.body.style.overflow = "hidden"; // Stop body scroll
    leadForm.classList.add('hidden');
  }
  
  function closePopup() {
    document.getElementById("popupForm").style.display = "none";
    document.body.style.overflow = "auto"; // Enable body scroll again
  }
  

  let captchaText = ""; // Make sure captchaText is available globally

  function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    captchaText = "";
    for (let i = 0; i < 6; i++) {
      captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    const canvas = document.getElementById("captchaCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    ctx.font = "24px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText(captchaText, 10, 30);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    generateCaptcha();
  
    const form = document.querySelector("form");
    const captchaInput = document.getElementById("captchaInput");
  
    form.addEventListener("submit", function (e) {
      if (captchaInput.value !== captchaText) {
        e.preventDefault();
        captchaInput.style.border = "2px solid red";
      } else {
        captchaInput.style.border = "2px solid green";
      }
    });
  
    captchaInput.addEventListener("input", () => {
      captchaInput.style.border = "1px solid #ccc";
    });
  });
  

window.onload = generateCaptcha;


let stickyCaptchaText = "";

function generateStickyCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  stickyCaptchaText = "";
  for (let i = 0; i < 6; i++) {
    stickyCaptchaText += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  const canvas = document.getElementById("stickyCaptchaCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = "24px Arial";
  ctx.fillStyle = "#000";
  ctx.fillText(stickyCaptchaText, 10, 30);
}

document.addEventListener("DOMContentLoaded", () => {
  generateStickyCaptcha();

  const stickyForm = document.querySelector("#leadForm form");
  const stickyInput = document.getElementById("stickyCaptchaInput");

  stickyForm.addEventListener("submit", function (e) {
    if (stickyInput.value !== stickyCaptchaText) {
      e.preventDefault();
      stickyInput.style.border = "2px solid red";
    } else {
      stickyInput.style.border = "2px solid green";
    }
  });

  stickyInput.addEventListener("input", () => {
    stickyInput.style.border = "1px solid #ccc";
  });
});

window.onload = generateStickyCaptcha;