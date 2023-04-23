



const burgerButton = document.querySelector(".burger-menu-btn");
const burgerMenu = document.querySelector(".burger-menu");

burgerButton.addEventListener("click", (event) => {
  event.preventDefault();
  burgerMenu.classList.toggle("active");
});



const topButton = document.querySelector(".top-button");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }
});

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
});

topButton.addEventListener("click", () => {
  scroll.animateScroll(0);
});

const email = document.querySelector(".footer__form--input");
const submit = document.querySelector(".footer__form--button");

function emailValidator() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\W]+$/;
  if (regex.test(email.value)) {
    email.style.color = "#00ff84";
    submit.disabled = false;

  } else {
    email.style.color = "#ff2600";
    submit.disabled = true;
  }
}

submit.addEventListener("click", () => {
  alert("Successfully submitted");
  email.value = "";
});

email.addEventListener('input', () => {
  setTimeout(emailValidator, 2000);
});


const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 4,
      direction: "vertical",
      allowSlideNext: false,
      allowSlidePrev: false,
      loop: false,
    },
    520: {
      loop: true,
      slidesPerView: 2,
      direction: "horizontal",
      allowSlideNext: true,
      allowSlidePrev: true,
    },
    750: {
      slidesPerView: 3,
    },
  },
});

let swiper2 = new Swiper(".mySwiper2", {
  breakpoints: {
    200: {
      slidesPerView: 3,
      spaceBetween: 15,
      direction: "vertical",
    },
    1000: {
      slidesPerView: 3,
      scrollbar: {
        dragSize: 75,
      },
    },
    1500: {
      slidesPerView: 4,
      scrollbar: {
        dragSize: 115,
      },
    },
  },
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  mousewheel: true,
  keyboard: {
    enabled: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

const cards = document.querySelectorAll('.testimonials__card-background');
cards.forEach(card => {
  card.addEventListener('click', () => {
    let fullscreen = document.createElement('div');
    document.body.style.overflow = "hidden";
    fullscreen.classList.add('fullscreen');
    fullscreen.appendChild(card.cloneNode(true));

    let close = document.createElement('div');
    close.classList.add('close');
    fullscreen.appendChild(close);
    close.addEventListener('click', () => {
      document.body.removeChild(fullscreen);
      document.body.style.overflow = "";
      card.scrollIntoView({behavior: 'auto'});
    });

    fullscreen.addEventListener('click', (event) => {
      if (event.target === fullscreen) {
        document.body.removeChild(fullscreen);
        document.body.style.overflow = "";
        card.scrollIntoView({behavior: 'auto'});
      }
    });

    document.body.appendChild(fullscreen);
  });
});