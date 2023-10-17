const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 51,
    },
  },
});

const accordion = new Accordion(".accordion-container");

const button1 = document.querySelector(".services__button_1");
const button2 = document.querySelector(".services__button_2");
const button3 = document.querySelector(".services__button_3");
const button4 = document.querySelector(".services__button_4");

const element1 = document.querySelector(".prices__content_1");
const element2 = document.querySelector(".prices__content_2");
const element3 = document.querySelector(".prices__content_3");
const element4 = document.querySelector(".prices__content_4");

function clickHandler(number) {
  return () => {
    let currentElement;
    let currentButton;

    switch (number) {
      case 1:
        currentElement = element1;
        currentButton = button1;
        break;
      case 2:
        currentElement = element2;
        currentButton = button2;
        break;
      case 3:
        currentElement = element3;
        currentButton = button3;
        break;
      case 4:
        currentElement = element4;
        currentButton = button4;
        break;
    }

    if (currentButton.matches("active")) {
      return;
    }

    button1.classList.remove("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
    button4.classList.remove("active");

    element1.classList.remove("active");
    element2.classList.remove("active");
    element3.classList.remove("active");
    element4.classList.remove("active");

    currentButton.classList.add("active");
    currentElement.classList.add("active");
  };
}

button1.addEventListener("click", clickHandler(1));
button2.addEventListener("click", clickHandler(2));
button3.addEventListener("click", clickHandler(3));
button4.addEventListener("click", clickHandler(4));
