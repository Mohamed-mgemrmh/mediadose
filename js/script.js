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

// about section
const aboutImg = document.querySelector(".about-container img");
let aboutSection = document.querySelector("#about");

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let sectionOffset = aboutSection.offsetTop;

  if (scrollPosition >= sectionOffset - 800) {
    let dynamicMarginTop = (scrollPosition - sectionOffset + 100) * 0.8;
    aboutImg.style.cssText = `transform: translateY(${dynamicMarginTop}px)`;
  }
});

