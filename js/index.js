/* project slider */
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);
  setInterval(nextSlide, 2000);
});

/* service slider */
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".service");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);
  setInterval(nextSlide, 3000);
});

// testimonail up to down slider
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const testimonials = document.querySelectorAll(".testimonial");
  const totalTestimonials = testimonials.length;
  let intervalId;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? "block" : "none";
    });
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial(currentIndex);
  }

  function startSlider() {
    intervalId = setInterval(nextTestimonial, 4000); // Change slide every 1 second
  }

  function stopSlider() {
    clearInterval(intervalId);
  }

  document
    .querySelector(".testimonial-slider")
    .addEventListener("mouseover", stopSlider);
  document
    .querySelector(".testimonial-slider")
    .addEventListener("mouseout", startSlider);

  showTestimonial(currentIndex);
  startSlider();
});
