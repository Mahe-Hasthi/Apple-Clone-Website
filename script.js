// Get the video element by its ID
const video = document.getElementById('video');

// Add event listener for mouseenter to play the video when the cursor hovers over it
video.addEventListener('mouseenter', function() {
  video.play();
});

// Add event listener for mouseleave to pause the video when the cursor leaves
video.addEventListener('mouseleave', function() {
  video.pause();
  video.currentTime = 0;  // Optionally reset the video to the beginning
});



let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

// Auto-slide functionality (optional)
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000); // Change slide every 5 seconds
