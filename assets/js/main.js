/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixer = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const workLinks = document.querySelectorAll(".work__item");

function activeWork(workLink) {
  workLinks.forEach((wl) => wl.classList.remove("active-work"));
  workLink.classList.add("active-work");
}

workLinks.forEach((wl) => {
  wl.addEventListener("click", () => activeWork(wl));
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: { slidesPerView: 2 },
    768: { slidesPerView: 2, spaceBetween: 48 },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    const link = document.querySelector(".nav__menu a[href*=" + sectionId + "]");
    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active-link");
      } else {
        link.classList.remove("active-link");
      }
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](lightTheme);
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](iconTheme);
}
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

// sr.reveal(`.nav__menu`, { delay: 100, scale: 0.1, origin: "bottom", distance: "300px" });
sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, { delay: 100 });
sr.reveal(`.home__social, .home__scroll`, { delay: 100, origin: "bottom" });
sr.reveal(`.about__img`, { delay: 100, origin: "left", scale: 0.9, distance: "30px" });
sr.reveal(`.about__data, .about__description, .about__button-contact`, { delay: 100, scale: 0.9, origin: "right", distance: "30px" });
sr.reveal(`.skills__content`, { delay: 100, scale: 0.9, origin: "bottom", distance: "30px" });
sr.reveal(`.services__title, .services__button`, { delay: 100, scale: 0.9, origin: "top", distance: "30px" });
sr.reveal(`.work__card`, { delay: 100, scale: 0.9, origin: "bottom", distance: "30px" });
sr.reveal(`.testimonial__container`, { delay: 100, scale: 0.9, origin: "bottom", distance: "30px" });
sr.reveal(`.contact__info, .contact__title-info`, { delay: 100, scale: 0.9, origin: "left", distance: "30px" });
sr.reveal(`.contact__form, .contact__title-form`, { delay: 100, scale: 0.9, origin: "right", distance: "30px" });
sr.reveal(`.footer, .footer__container`, { delay: 100, scale: 0.9, origin: "bottom", distance: "30px" });

/*=============== CUSTOM LOADING SCREEN (TOUKIR TEXT ANIMATION) ===============*/
const letters = document.querySelectorAll('.loading-text span');
let current = 0;

function animateLoader() {
  letters.forEach((letter, index) => {
    const distance = Math.abs(index - current);
    if (distance === 0) letter.style.opacity = 1;
    else if (distance === 1) letter.style.opacity = 0.6;
    else if (distance === 2) letter.style.opacity = 0.4;
    else letter.style.opacity = 0.2;
  });
  current = (current + 1) % letters.length;
}
let loaderInterval = setInterval(animateLoader, 300);

/* HIDE LOADING SCREEN AFTER 7 SECONDS */
/*=============== LOADING SCREEN HIDE AFTER 7 SECONDS ===============*/
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.querySelector('.loading-screen');
    if (loader) {
      loader.style.opacity = 0;
      setTimeout(() => {
        loader.style.display = 'none';
      }, 100);
    }
  }, 5000); // 7 seconds heartbeat
});


/*=============== HOME IMG SPIN & CARD SHAKE ===============*/
const homeImg = document.querySelector('.home__img');
if (homeImg) {
  homeImg.addEventListener('click', () => {
    homeImg.classList.add('spin-zoom');
    setTimeout(() => homeImg.classList.remove('spin-zoom'), 8000);
  });
}

document.querySelectorAll('.work__card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.add('shake');
    setTimeout(() => card.classList.remove('shake'), 10000);
  });
});
