let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-slide");

// Function to show the next slide
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

// Function to show the previous slide
function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}
let goToSkills=()=>{
  window.scrollTo(1,351) 
}
let goToHome=()=>{
  window.scrollTo(1,1)
}
let goToAbout=()=>{
  window.scrollTo(1,940)
}


// Function to display the current slide
function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

// Auto slide
setInterval(nextSlide, 3000); // Change slide every 3 seconds
