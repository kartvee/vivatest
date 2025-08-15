document.addEventListener("DOMContentLoaded", () => {
  // Language persistence
  const btnKa = document.getElementById("btn-ka");
  const btnEn = document.getElementById("btn-en");
  const kaElements = document.querySelectorAll("[data-ka]");
  const enElements = document.querySelectorAll("[data-en]");
  const overlayBtn = document.getElementById("overlay-btn"); // single center button

  let lang = localStorage.getItem("lang") || "ka";
  switchLanguage(lang);

  btnKa.addEventListener("click", () => switchLanguage("ka"));
  btnEn.addEventListener("click", () => switchLanguage("en"));

  function switchLanguage(l) {
    lang = l;
    localStorage.setItem("lang", l);

    if (l === "ka") {
      kaElements.forEach(el => el.hidden = false);
      enElements.forEach(el => el.hidden = true);
      overlayBtn.textContent = "გაიგე მეტი";
      btnKa.classList.add("active");
      btnEn.classList.remove("active");
    } else {
      kaElements.forEach(el => el.hidden = true);
      enElements.forEach(el => el.hidden = false);
      overlayBtn.textContent = "More";
      btnKa.classList.remove("active");
      btnEn.classList.add("active");
    }
  }

  // Slideshow
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let currentIndex = 0;
  let slideInterval = setInterval(nextSlide, 7000); // 7 seconds

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
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

  nextBtn.addEventListener("click", () => { nextSlide(); resetInterval(); });
  prevBtn.addEventListener("click", () => { prevSlide(); resetInterval(); });

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 7000);
  }

  // Smooth scroll for overlay button
  const newsSection = document.getElementById("news");
  overlayBtn.addEventListener("click", e => {
    e.preventDefault();
    newsSection.scrollIntoView({ behavior: "smooth" });
  });
});
