// let currentIndex = 0;
// const slides = document.querySelectorAll('.slider img');
// const totalSlides = slides.length;

// function updateSliderPosition() {
//   const slider = document.querySelector('.slider');
//   slider.style.transform = `translateX(-${currentIndex * 600}px)`;
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % totalSlides; 
//   updateSliderPosition();
// }

// function prevSlide() {
//   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
//   updateSliderPosition();
// }



let currentIndex = 0;
let slides = document.querySelectorAll('.slider img');
let totalSlides = slides.length;
let dots = document.querySelectorAll('.dot');
let autoSlideInterval;
let isPlaying = true;

function updateSliderPosition() {
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentIndex * 600}px)`;
  updateDots();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSliderPosition();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSliderPosition();
}

function setSlide(index) {
  currentIndex = index;
  updateSliderPosition();
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000); 
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

function togglePlayPause() {
  const playPauseBtn = document.getElementById('playPauseBtn');
  if (isPlaying) {
    stopAutoSlide();
    playPauseBtn.textContent = 'Play';
  } else {
    startAutoSlide();
    playPauseBtn.textContent = 'Pause';
  }
  isPlaying = !isPlaying;
}


startAutoSlide();

