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




const dots = document.querySelectorAll('.dot');
const amounts = document.querySelectorAll('.amount');
const dietsAmount = document.querySelector('.pandas-diets__amount');
const anotherAmount = document.querySelector('.amount__another-amount');

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => { 
      dots.forEach(dt => {
        dt.classList.remove('active');
      });

      amounts.forEach(amount => {
        amount.style.color = "";
      });

      dot.classList.add('active');
      dietsAmount.innerHTML = amounts[index + 1].getAttribute('data-value') / 250;
      amounts[index + 1].style.color = "#FE9013";
    });
  });

anotherAmount.addEventListener('input', () => {
  dots.forEach(dt => {
    dt.classList.remove('active');
  });

  amounts.forEach(amount => {
    amount.style.color = "";
  });

  dietsAmount.innerHTML = anotherAmount.value / 250;
});
