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

const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const closeMobileMenuButton = document.querySelector(
  ".mobile-menu__close-button",
);

mobileMenuButton.addEventListener(
  "click",
  () => {
    mobileMenu.classList.add("active");
    document.documentElement.classList.add("mobile-menu-active");
  },
);
closeMobileMenuButton.addEventListener(
  "click",
  () => {
    mobileMenu.classList.remove("active");
    document.documentElement.classList.remove("mobile-menu-active");
  },
);

const options = {
  stories: [
    {
      id: "1-story",
      photo: "./images/dest/1.png",
      name: "",
      time: 0,
      items: [
        {
          id: "1-story-1",
          type: "video",
          length: 0,
          src: "./stories/1.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "2-story",
      photo: "./images/dest/2.png",
      name: "",
      time: 0,
      items: [
        {
          id: "2-story-1",
          type: "video",
          length: 0,
          src: "./stories/2.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "3-story",
      photo: "./images/dest/3.png",
      name: "",
      time: 0,
      items: [
        {
          id: "3-story-1",
          type: "video",
          length: 0,
          src: "./stories/1.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "4-story",
      photo: "./images/dest/4.png",
      name: "",
      time: 0,
      items: [
        {
          id: "4-story-1",
          type: "video",
          length: 0,
          src: "./stories/4.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "5-story",
      photo: "./images/dest/5.png",
      name: "",
      time: 0,
      items: [
        {
          id: "5-story-1",
          type: "video",
          length: 0,
          src: "./stories/5.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },

    {
      id: "6-story",
      photo: "./images/dest/6.png",
      name: "",
      time: 0,
      items: [
        {
          id: "6-story-1",
          type: "video",
          length: 0,
          src: "./stories/1.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },

    {
      id: "6-story",
      photo: "./images/dest/6.png",
      name: "",
      time: 0,
      items: [
        {
          id: "6-story-1",
          type: "video",
          length: 0,
          src: "./stories/6.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },

    {
      id: "7-story",
      photo: "./images/dest/7.png",
      name: "",
      time: 0,
      items: [
        {
          id: "7-story-1",
          type: "video",
          length: 0,
          src: "./stories/7.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },

    {
      id: "8-story",
      photo: "./images/dest/8.png",
      name: "",
      time: 0,
      items: [
        {
          id: "8-story-1",
          type: "video",
          length: 0,
          src: "./stories/8.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },

    {
      id: "9-story",
      photo: "./images/dest/9.png",
      name: "",
      time: 0,
      items: [
        {
          id: "9-story-1",
          type: "video",
          length: 0,
          src: "./stories/9.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },

    {
      id: "9-story",
      photo: "./images/dest/9.png",
      name: "",
      time: 0,
      items: [
        {
          id: "9-story-1",
          type: "video",
          length: 0,
          src: "./stories/9.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },

    {
      id: "9-story",
      photo: "./images/dest/9.png",
      name: "",
      time: 0,
      items: [
        {
          id: "9-story-1",
          type: "video",
          length: 0,
          src: "./stories/9.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },

    {
      id: "9-story",
      photo: "./images/dest/9.png",
      name: "",
      time: 0,
      items: [
        {
          id: "9-story-1",
          type: "video",
          length: 0,
          src: "./stories/9.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },

    {
      id: "10-story",
      photo: "./images/dest/10.png",
      name: "",
      time: 0,
      items: [
        {
          id: "10-story-1",
          type: "video",
          length: 0,
          src: "./stories/10.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "11-story",
      photo: "./images/dest/11.png",
      name: "",
      time: 0,
      items: [
        {
          id: "11-story-1",
          type: "video",
          length: 0,
          src: "./stories/11.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "12-story",
      photo: "./images/dest/12.png",
      name: "",
      time: 0,
      items: [
        {
          id: "12-story-1",
          type: "video",
          length: 0,
          src: "./stories/12.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "13-story",
      photo: "./images/dest/13.png",
      name: "",
      time: 0,
      items: [
        {
          id: "13-story-1",
          type: "video",
          length: 0,
          src: "./stories/10.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "14-story",
      photo: "./images/dest/14.png",
      name: "",
      time: 0,
      items: [
        {
          id: "14-story-1",
          type: "video",
          length: 0,
          src: "./stories/14.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "15-story",
      photo: "./images/dest/15.png",
      name: "",
      time: 0,
      items: [
        {
          id: "15-story-1",
          type: "video",
          length: 0,
          src: "./stories/15.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "16-story",
      photo: "./images/dest/16.png",
      name: "",
      time: 0,
      items: [
        {
          id: "16-story-1",
          type: "video",
          length: 0,
          src: "./stories/16.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "17-story",
      photo: "./images/dest/17.png",
      name: "",
      time: 0,
      items: [
        {
          id: "17-story-1",
          type: "video",
          length: 0,
          src: "./stories/17.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "18-story",
      photo: "./images/dest/18.png",
      name: "",
      time: 0,
      items: [
        {
          id: "18-story-1",
          type: "video",
          length: 0,
          src: "./stories/19.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "20-story",
      photo: "./images/dest/20.png",
      name: "",
      time: 0,
      items: [
        {
          id: "20-story-1",
          type: "video",
          length: 0,
          src: "./stories/20.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "21-story",
      photo: "./images/dest/21.png",
      name: "",
      time: 0,
      items: [
        {
          id: "21-story-1",
          type: "video",
          length: 0,
          src: "./stories/21.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "21-story",
      photo: "./images/dest/21.png",
      name: "",
      time: 0,
      items: [
        {
          id: "21-story-1",
          type: "video",
          length: 0,
          src: "./stories/21.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "22-story",
      photo: "./images/dest/22.png",
      name: "",
      time: 0,
      items: [
        {
          id: "22-story-1",
          type: "video",
          length: 0,
          src: "./stories/22.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "23-story",
      photo: "./images/dest/23.png",
      name: "",
      time: 0,
      items: [
        {
          id: "23-story-1",
          type: "video",
          length: 0,
          src: "./stories/23.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "24-story",
      photo: "./images/dest/24.png",
      name: "",
      time: 0,
      items: [
        {
          id: "24-story-1",
          type: "video",
          length: 0,
          src: "./stories/24.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "25-story",
      photo: "./images/dest/25.png",
      name: "",
      time: 0,
      items: [
        {
          id: "25-story-1",
          type: "video",
          length: 0,
          src: "./stories/25.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
    {
      id: "26-story",
      photo: "./images/dest/26.png",
      name: "",
      time: 0,
      items: [
        {
          id: "26-story-1",
          type: "video",
          length: 0,
          src: "./stories/26.mp4",
          link: "",
          linkText: false,
          time: 0,
        },
      ],
    },
  ],
};

const element = document.querySelector("#stories");
const stories = Zuck(element, options);

