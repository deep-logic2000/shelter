// ================== BURGER MENU ==================

let BODY = document.querySelector("body");
let BURGER_BUTTON = document.querySelector(".nav-menu-button-wrapper");
let BURGER_NAV_MENU_WRAPPER = document.querySelector(
 ".burger-nav-menu__wrapper"
);
let BURGER_NAV_MENU_BACKGROUND = document.querySelector(".burger-background");
let BURGER_NAV_MENU = document.querySelector(".burger-nav-menu");
let BURGER_NAV_MENU_LINKS = document.querySelectorAll(".nav-menu-item");

BURGER_BUTTON.addEventListener("click", function () {
 BURGER_NAV_MENU_WRAPPER.classList.toggle("burger-nav-menu--open");
 BURGER_NAV_MENU.classList.toggle("burger-nav-menu--open");
 BURGER_BUTTON.classList.toggle("nav-menu-button-wrapper--open");
 BODY.classList.toggle("body--overflow");
 BURGER_NAV_MENU_BACKGROUND.style.display = "block";
});

const closeBurgerMenu = () => {
 BODY.classList.remove("body--overflow");
 BURGER_NAV_MENU_WRAPPER.classList.remove("burger-nav-menu--open");
 BURGER_NAV_MENU.classList.remove("burger-nav-menu--open");
 BURGER_BUTTON.classList.remove("nav-menu-button-wrapper--open");
 BURGER_NAV_MENU_BACKGROUND.style.display = "none";
};

BURGER_NAV_MENU_BACKGROUND.addEventListener("click", function () {
 closeBurgerMenu();
});

BURGER_NAV_MENU_LINKS.forEach((link) => {
 link.addEventListener("click", function () {
  closeBurgerMenu();
 });
});

// ================== SLIDER ==================

const PETS = [
 {
  name: "Jennifer",
  img: "./assets/images/our-friends/pets-jennifer.png",
  type: "Dog",
  breed: "Labrador",
  description:
   "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
  age: "2 months",
  inoculations: ["none"],
  diseases: ["none"],
  parasites: ["none"],
 },
 {
  name: "Sophia",
  img: "./assets/images/our-friends/pets-sophia.png",
  type: "Dog",
  breed: "Shih tzu",
  description:
   "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
  age: "1 month",
  inoculations: ["parvovirus"],
  diseases: ["none"],
  parasites: ["none"],
 },
 {
  name: "Woody",
  img: "./assets/images/our-friends/pets-woody.png",
  type: "Dog",
  breed: "Golden Retriever",
  description:
   "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
  age: "3 years 6 months",
  inoculations: ["adenovirus", "distemper"],
  diseases: ["right back leg mobility reduced"],
  parasites: ["none"],
 },
 {
  name: "Scarlett",
  img: "./assets/images/our-friends/pets-scarlet.png",
  type: "Dog",
  breed: "Jack Russell Terrier",
  description:
   "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
  age: "3 months",
  inoculations: ["parainfluenza"],
  diseases: ["none"],
  parasites: ["none"],
 },
 {
  name: "Katrine",
  img: "./assets/images/our-friends/pets-katrine.png",
  type: "Cat",
  breed: "British Shorthair",
  description:
   "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
  age: "6 months",
  inoculations: ["panleukopenia"],
  diseases: ["none"],
  parasites: ["none"],
 },
 {
  name: "Timmy",
  img: "./assets/images/our-friends/pets-timmy.png",
  type: "Cat",
  breed: "British Shorthair",
  description:
   "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
  age: "2 years 3 months",
  inoculations: ["calicivirus", "viral rhinotracheitis"],
  diseases: ["kidney stones"],
  parasites: ["none"],
 },
 {
  name: "Freddie",
  img: "./assets/images/our-friends/pets-freddie.png",
  type: "Cat",
  breed: "British Shorthair",
  description:
   "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
  age: "2 months",
  inoculations: ["rabies"],
  diseases: ["none"],
  parasites: ["none"],
 },
 {
  name: "Charly",
  img: "./assets/images/our-friends/pets-charly.png",
  type: "Dog",
  breed: "Jack Russell Terrier",
  description:
   "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
  age: "8 years",
  inoculations: ["bordetella bronchiseptica", "leptospirosis"],
  diseases: ["deafness", "blindness"],
  parasites: ["lice", "fleas"],
 },
];

const SLIDER_WRAPPER = document.querySelector(".slider-wrapper");
const SLIDER_CONTENT_WRAPPER = document.querySelector(
 ".slider-content-wrapper"
);
const SLIDER = document.querySelector(".slider-content");
const SLIDER_LEFT_BUTTON = document.querySelector(".our-friends-arrow-left");
const SLIDER_RIGHT_BUTTON = document.querySelector(".our-friends-arrow-right");

const PREV_SLIDER = document.querySelector(".slider-content-prev");
const ACTIVE_SLIDER = document.querySelector(".slider-content-active");
const NEXT_SLIDER = document.querySelector(".slider-content-next");

let prevSliderArray = [];
let activeSliderArray = [];
let nextSliderArray = [];

let carouselSize;
let widthOfOneCard;
let widthOfOneSlide;

setScreenSize();

function createSliderItem(pet) {
 const SLIDER_ITEM_WRAPPER = document.createElement("div");
 SLIDER_ITEM_WRAPPER.classList.add("our-friends-card-container");
 SLIDER_ITEM_WRAPPER.style.width = `${widthOfOneCard}px`;
 const SLIDER_ITEM = document.createElement("div");
 SLIDER_ITEM.classList.add("our-friends-card-wrapper");

 const SLIDER_ITEM_IMG = document.createElement("img");
 SLIDER_ITEM_IMG.setAttribute("src", pet.img);
 SLIDER_ITEM_IMG.setAttribute("alt", pet.name);

 const SLIDER_ITEM_NAME = document.createElement("p");
 SLIDER_ITEM_NAME.classList.add("our-friends-pet-name");
 SLIDER_ITEM_NAME.innerHTML = pet.name;

 const SLIDER_ITEM_BUTTON = document.createElement("button");
 SLIDER_ITEM_BUTTON.classList.add("our-friends-btn-more");
 SLIDER_ITEM_BUTTON.innerHTML = "Learn more";

 SLIDER_ITEM.append(SLIDER_ITEM_IMG, SLIDER_ITEM_NAME, SLIDER_ITEM_BUTTON);
 SLIDER_ITEM_WRAPPER.append(SLIDER_ITEM);

 return SLIDER_ITEM_WRAPPER;
}

const generateSlides = (carouselSize, filterArr) => {
 const slides = new Set();
 while (slides.size < carouselSize) {
  const randomIndex = Math.floor(Math.random() * PETS.length);
  if (filterArr) {
   const namesFilterArr = filterArr.map((el) => el.name);
   if (!namesFilterArr.includes(PETS[randomIndex].name)) {
    slides.add(PETS[randomIndex]);
   }
  } else {
   slides.add(PETS[randomIndex]);
  }
 }
 return Array.from(slides);
};

const initFn = () => {
 activeSliderArray = [];
 prevSliderArray = [];
 nextSliderArray = [];
 setScreenSize();

 activeSliderArray = generateSlides(carouselSize);
 prevSliderArray = generateSlides(carouselSize, activeSliderArray);
 nextSliderArray = generateSlides(carouselSize, activeSliderArray);

 const SLIDER_ITEMS_PREV = prevSliderArray.map((pet) => createSliderItem(pet));
 PREV_SLIDER.append(...SLIDER_ITEMS_PREV);

 const SLIDER_ITEMS_ACTIVE = activeSliderArray.map((pet) =>
  createSliderItem(pet)
 );
 ACTIVE_SLIDER.append(...SLIDER_ITEMS_ACTIVE);

 const SLIDER_ITEMS_NEXT = nextSliderArray.map((pet) => createSliderItem(pet));
 NEXT_SLIDER.append(...SLIDER_ITEMS_NEXT);
};

function moveSlidesLeft() {
 let slides = document.querySelectorAll(".our-friends-card-container");
 let slidesArray = Array.from(slides);

 SLIDER.lastElementChild.style.left = "0px";
 SLIDER.querySelector(
  ".slider-content-slide:nth-child(2)"
 ).style.left = `-${widthOfOneSlide}px`;

 let elToRemove = SLIDER.firstElementChild;
 SLIDER.removeChild(elToRemove);

 let newNextSlide = nextSliderArray.map((pet) => createSliderItem(pet));
 let newNextSlideWrapper = document.createElement("div");
 newNextSlideWrapper.classList.add(
  "slider-content-slide",
  "slider-content-next"
 );
 newNextSlideWrapper.append(...newNextSlide);
 SLIDER.append(newNextSlideWrapper);
 SLIDER.lastElementChild.style.left = `${widthOfOneSlide}px`;
}

function moveSlidesRight() {
 let slides = document.querySelectorAll(".our-friends-card-container");
 let slidesArray = Array.from(slides);

 let elToRemove = SLIDER.lastElementChild;
 SLIDER.removeChild(elToRemove);
 SLIDER.firstElementChild.style.left = "0px";
 SLIDER.querySelector(
  ".slider-content-slide:nth-child(2)"
 ).style.left = `${widthOfOneSlide}px`;

 let newPrevSlide = prevSliderArray.map((pet) => createSliderItem(pet));
 let newPrevSlideWrapper = document.createElement("div");
 newPrevSlideWrapper.classList.add(
  "slider-content-slide",
  "slider-content-prev"
 );
 newPrevSlideWrapper.append(...newPrevSlide);
 SLIDER.prepend(newPrevSlideWrapper);
 SLIDER.firstElementChild.style.left = `-${widthOfOneSlide}px`;
}

window.onload = initFn;
window.addEventListener("resize", setScreenSize);

function setScreenSize() {
 if (window.innerWidth >= 1025) {
  carouselSize = 3;
  widthOfOneCard = SLIDER_CONTENT_WRAPPER.offsetWidth / carouselSize;
  widthOfOneSlide = SLIDER_CONTENT_WRAPPER.offsetWidth;
  SLIDER.firstElementChild.style.left = `-${widthOfOneSlide}px`;
  SLIDER.querySelector(".slider-content-slide:nth-child(2)").style.left = "0px";
  SLIDER.lastElementChild.style.left = `${widthOfOneSlide}px`;

  let SLIDES = document.querySelectorAll(".our-friends-card-container");
  SLIDES.forEach((slide) => {
   slide.style.width = `${widthOfOneCard}px`;
  });
  console.log("carouselSize = 3");
 } else if (window.innerWidth >= 768) {
  // if(carouselSize !== 2) window.location.reload();
  carouselSize = 2;
  widthOfOneCard = SLIDER_CONTENT_WRAPPER.offsetWidth / 2;
  widthOfOneSlide = SLIDER_CONTENT_WRAPPER.offsetWidth;

  SLIDER.firstElementChild.style.left = `-${widthOfOneSlide}px`;
  SLIDER.querySelector(".slider-content-slide:nth-child(2)").style.left = "0px";
  SLIDER.lastElementChild.style.left = `${widthOfOneSlide}px`;
  let SLIDES = document.querySelectorAll(".our-friends-card-container");
  SLIDES.forEach((slide) => {
   slide.style.width = `${widthOfOneCard}px`;
  });
  console.log("carouselSize = 2");
 } else {
  // if(carouselSize !== 1) window.location.reload();
  carouselSize = 1;
  widthOfOneCard = SLIDER_CONTENT_WRAPPER.offsetWidth;
  widthOfOneSlide = SLIDER_CONTENT_WRAPPER.offsetWidth;
  SLIDER.style.left = `-${widthOfOneSlide}px)`;
  let SLIDES = document.querySelectorAll(".our-friends-card-container");
  SLIDES.forEach((slide) => {
   slide.style.width = `${widthOfOneCard - 100}px`;
  });
  console.log("carouselSize = 1");
 }
}

const moveLeft = () => {
 nextSliderArray = activeSliderArray;
 activeSliderArray = prevSliderArray;
 prevSliderArray = generateSlides(carouselSize, activeSliderArray);

 moveSlidesLeft();
};

const moveRight = () => {
 prevSliderArray = activeSliderArray;
 activeSliderArray = nextSliderArray;
 nextSliderArray = generateSlides(carouselSize, activeSliderArray);

 moveSlidesRight();
};

SLIDER_LEFT_BUTTON.addEventListener("click", moveRight);
SLIDER_RIGHT_BUTTON.addEventListener("click", moveLeft);

// ======================= POPUP =======================

const POPUP_WRAPPER = document.querySelector("#popup-wrapper");
const POPUP_BACKGROUND = document.querySelector(".popup-background");
const POPUP_CLOSE_BUTTON = document.querySelector(".popup-close-icon__wrapper");
const POPUP_CONTENT_WRAPPER = document.querySelector("#popup-content__wrapper");
const POPUP_IMG_WRAPPER = document.querySelector(".popup-img-wrapper");
const POPUP_DESCRIPTION_WRAPPER = document.querySelector(
 ".popup-description__wrapper"
);

const showPopup = () => {
 POPUP_WRAPPER.classList.remove("hidden");
 document.body.style.overflow = "hidden";
};

const closePopup = (e) => {
 console.log("e.target", e.target);
 if (
  e.target === POPUP_BACKGROUND ||
  e.target === POPUP_CLOSE_BUTTON ||
  e.target === POPUP_CLOSE_BUTTON.querySelector("img")
 ) {
  POPUP_WRAPPER.classList.add("hidden");
  document.body.style.overflow = "auto";
  POPUP_IMG_WRAPPER.innerHTML = "";
  POPUP_DESCRIPTION_WRAPPER.innerHTML = "";
 }
};

const createPopup = (petName) => {
 const pet = PETS.find((pet) => pet.name === petName);
 console.log("pet", pet);
 const popupImg = document.createElement("img");
 popupImg.classList.add("popup-img");
 popupImg.setAttribute("src", pet.img);
 popupImg.setAttribute("alt", pet.name);

 const popupName = document.createElement("h3");
 popupName.classList.add("popup-name");
 popupName.innerHTML = pet.name;

 const popupType = document.createElement("p");
 popupType.classList.add("popup-type");
 popupType.innerHTML = `${pet.type} - ${pet.breed}`;

 const popupDescription = document.createElement("p");
 popupDescription.classList.add("popup-description");
 popupDescription.innerHTML = pet.description;

 const popupList = document.createElement("ul");
 popupList.classList.add("popup-list");

 const popupAge = document.createElement("li");
 const popupTitleAge = `<h4 class="popup-list-title"><b>Age: </b>${pet.age}</h4>`;
 popupAge.innerHTML = popupTitleAge;
 popupAge.classList.add("popup-list-item", "popup-age");

 const popupInoculations = document.createElement("li");
 const popupInoculationsTitle = `<h4 class="popup-list-title"><b>Inoculations: </b>${pet.inoculations.map(
  (el, i) =>
   i === pet.parasites.length - 1
    ? `<span>&nbsp;${el}</span>`
    : `<span>${el}</span>`
 )}</h4>`;
 popupInoculations.innerHTML = popupInoculationsTitle;
 popupInoculations.classList.add("popup-list-item", "popup-inoculations");

 const popupDiseases = document.createElement("li");
 const popupDiseasesTitle = `<h4 class="popup-list-title"><b>Diseases: </b>${pet.diseases.map(
  (el, i) =>
   i === pet.parasites.length - 1
    ? `<span>&nbsp;${el}</span>`
    : `<span>${el}</span>`
 )}</h4>`;
 popupDiseases.innerHTML = popupDiseasesTitle;
 popupDiseases.classList.add("popup-list-item", "popup-diseases");

 const popupParasites = document.createElement("li");
 const popupParasitesTitle = `<h4 class="popup-list-title"><b>Parasites: </b>${pet.parasites.map(
  (el, i) =>
   i === pet.parasites.length - 1
    ? `<span>&nbsp;${el}</span>`
    : `<span>${el}</span>`
 )}</h4>`;
 popupParasites.innerHTML = popupParasitesTitle;
 popupParasites.classList.add("popup-list-item", "popup-parasites");

 popupList.append(popupAge, popupInoculations, popupDiseases, popupParasites);

 POPUP_IMG_WRAPPER.append(popupImg);
 POPUP_DESCRIPTION_WRAPPER.append(
  popupName,
  popupType,
  popupDescription,
  popupList
 );
};

SLIDER.addEventListener("click", (e) => {
 createPopup(
  e.target.closest(".our-friends-card-container").querySelector("p").innerHTML
 );
 showPopup();
});

POPUP_BACKGROUND.addEventListener("click", closePopup);
POPUP_CLOSE_BUTTON.addEventListener("click", closePopup);
