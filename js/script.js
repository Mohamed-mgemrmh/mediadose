var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 600,
  preventClicks: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

const header = document.querySelector(".header");
const contactButton = document.querySelector(".whatsapp");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
};

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    contactButton.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    contactButton.classList.remove("active");
  }
});

import translations from "./translations.js";

// Select dropdown
const langSelect = document.querySelector("select");

// On language change
langSelect.addEventListener("change", (event) => {
  const selectedLang = event.target.value;
  localStorage.setItem("lang", selectedLang);
  setLanguage(selectedLang);
});

// On page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  langSelect.value = savedLang;
  setLanguage(savedLang);
});

// Set language and update content + data-btn
function setLanguage(language) {
  const elements = document.querySelectorAll("[data-translate]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    const translated = translations[language][key];

    if (translated) {
      element.textContent = translated;
      element.setAttribute("data-btn", translated);
    }
  });

  // Set direction and lang attribute
  document.dir = language === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = language;
}
