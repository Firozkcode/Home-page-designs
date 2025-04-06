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
  





