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

// ==================== PAGINATION ====================

const PETS = [
 {
  name: "Jennifer",
  img: "../../assets/images/our-friends/pets-jennifer.png",
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
  img: "../../assets/images/our-friends/pets-sophia.png",
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
  img: "../../assets/images/our-friends/pets-woody.png",
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
  img: "../../assets/images/our-friends/pets-scarlet.png",
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
  img: "../../assets/images/our-friends/pets-katrine.png",
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
  img: "../../assets/images/our-friends/pets-timmy.png",
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
  img: "../../assets/images/our-friends/pets-freddie.png",
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
  img: "../../assets/images/our-friends/pets-charly.png",
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

const PAGINATION_WRAPPER = document.querySelector(".slider-content");
const PAGINATION_BTN_TO_START = document.querySelector(
 ".pagination-go-start-btn"
);
const PAGINATION_BTN_TO_END = document.querySelector(".pagination-go-end-btn");
const PAGINATION_BTN_PREV = document.querySelector(".pagination-go-prev-btn");
const PAGINATION_BTN_NEXT = document.querySelector(".pagination-go-next-btn");

const PAGINATION_PAGE = document.querySelector(".pagination-current-page");

const tempArr = [0, 1, 2, 3, 4, 5, 6, 7];
const newPetsNumbersArr = [];

function shuffle(array) {
 return array.sort(() => Math.random() - 0.5);
}

// ===========================================
let tempPetsArr = [];

// const generateArrWithUniqueFourNumberInBeginning = (filterNumbers, newShuffledArr) => {
//   console.log("filterNumbers prop in generateArrWithUniqueFourNumberInBeginning ", filterNumbers);
//   console.log("newShuffledArr prop in generateArrWithUniqueFourNumberInBeginning", newShuffledArr);
// //  let temp = shuffle(tempArr);
//  let tempUniqueArr = [];
//  let tempArr = [];
//  for (let i = 0; i < newShuffledArr.length; i++) {
  
//   if (!filterNumbers.includes(newShuffledArr[i])) {
//    tempUniqueArr.push(newShuffledArr[i]);
//   } else {
//    tempArr.push(newShuffledArr[i]);
//   }
//  }
//  console.log('return [...tempUniqueArr, ...tempArr]', [...tempUniqueArr, ...tempArr]);
//  return [...tempUniqueArr, ...tempArr];
// };

const generateNewArr = (filterNumbers, newShuffledArr) => {
  let tempUniqueArr = [];
  let tempArr = [];
  for (let i = 0; i < newShuffledArr.length; i++) {
    if(!filterNumbers.includes(newShuffledArr[i])) {
      tempUniqueArr.push(newShuffledArr[i]);
      filterNumbers.shift();
    } else {
      tempArr.push(newShuffledArr[i]);
    }
  }
  return [...tempUniqueArr, ...tempArr];
}


while (tempPetsArr.length < 48) {
 let temp = shuffle(tempArr);
 if (tempPetsArr.length === 0) {
  tempPetsArr.push(...temp);
  continue;
 }
 let lastFiveNumbers = tempPetsArr.slice(-5);
 const newArr = generateNewArr(lastFiveNumbers, temp);

 tempPetsArr.push(...newArr);
}


for (let index = 0; index < 6; index++) {
 let temp = shuffle(tempArr);
 newPetsNumbersArr.push(...temp);
}
const newPetsArray = tempPetsArr.map((item) => PETS[item]);


let petsPerPage;
let currentPage = 1;
let petsCount = PETS.length;

const mQueryDesktop = window.matchMedia("(max-width: 1280px)");
const mQueryMobile = window.matchMedia("(max-width: 1280px)");

const setParametres = () => {
 if (mqls[0].matches) {
  petsPerPage = 8;
  if (currentPage > newPetsArray.length / petsPerPage) {
   currentPage = 6;
  }
  showPets(currentPage, 8);
  checkPaginationBtns(currentPage);
 }
 if (mqls[1].matches) {
  petsPerPage = 6;
  if (currentPage > newPetsArray.length / petsPerPage) {
   currentPage = newPetsArray.length / petsPerPage;
   PAGINATION_PAGE.innerHTML = currentPage;
  }
  showPets(currentPage, petsPerPage);
  checkPaginationBtns(currentPage);
 }
 if (mqls[2].matches) {
  petsPerPage = 6;
  if (currentPage > newPetsArray.length / petsPerPage) {
   currentPage = newPetsArray.length / petsPerPage;
   PAGINATION_PAGE.innerHTML = currentPage;
  }
  showPets(currentPage, 6);
  checkPaginationBtns(currentPage);
 }
 if (mqls[3].matches) {
  petsPerPage = 3;
  showPets(currentPage, 3);
  checkPaginationBtns(currentPage);
 }
};

let mqls = [
 window.matchMedia("(min-width: 1024px)"), // 8
 window.matchMedia("(max-width: 1024px) and (min-width: 900px)"), // 6 (3*2)
 window.matchMedia("(max-width: 899px) and (min-width: 640px)"), // 6 (2*3)
 window.matchMedia("(max-width: 639px)"), // 3 (3*1)
];

for (let i = 0; i < mqls.length; i++) {
 setParametres(mqls[i]); // call listener function explicitly at run time
 mqls[i].addListener(setParametres); // attach listener function to listen in on state changes
}

function checkPaginationBtns(currentPage) {
 if (currentPage === 1) {
  PAGINATION_BTN_PREV.setAttribute("disabled", true);
  PAGINATION_BTN_TO_START.setAttribute("disabled", true);
 } else {
  PAGINATION_BTN_PREV.removeAttribute("disabled");
  PAGINATION_BTN_TO_START.removeAttribute("disabled");
 }
 if (currentPage >= Math.ceil(newPetsArray.length / petsPerPage)) {
  PAGINATION_BTN_NEXT.setAttribute("disabled", true);
  PAGINATION_BTN_TO_END.setAttribute("disabled", true);
 } else {
  PAGINATION_BTN_NEXT.removeAttribute("disabled");
  PAGINATION_BTN_TO_END.removeAttribute("disabled");
 }
}

function showPets(page, petsPerPage) {
 const start = (page - 1) * petsPerPage;
 const end = start + petsPerPage;
 const pets = newPetsArray.slice(start, end);
 PAGINATION_WRAPPER.innerHTML = "";
 pets.forEach((pet) => {
  PAGINATION_WRAPPER.innerHTML += `
      <div class="our-friends-card-wrapper">
           <img src="${pet.img}" alt="${pet.name}">
           <p class="our-friends-pet-name">${pet.name}</p>
           <button class="our-friends-btn-more">Learn more</button>
          </div>
      `;
 });
}

PAGINATION_BTN_NEXT.addEventListener("click", () => {
 currentPage++;
 PAGINATION_PAGE.innerHTML = currentPage;
 showPets(currentPage, petsPerPage);
 checkPaginationBtns(currentPage);
});

PAGINATION_BTN_PREV.addEventListener("click", () => {
 currentPage--;
 PAGINATION_PAGE.innerHTML = currentPage;
 showPets(currentPage, petsPerPage);
 checkPaginationBtns(currentPage);
});

PAGINATION_BTN_TO_START.addEventListener("click", () => {
 currentPage = 1;
 PAGINATION_PAGE.innerHTML = currentPage;
 showPets(currentPage, petsPerPage);
 checkPaginationBtns(currentPage);
});

PAGINATION_BTN_TO_END.addEventListener("click", () => {
 currentPage = Math.ceil(newPetsArray.length / petsPerPage);
 PAGINATION_PAGE.innerHTML = currentPage;
 showPets(currentPage, petsPerPage);
 checkPaginationBtns(currentPage);
});

// ======================= POPUP =======================

const POPUP_WRAPPER = document.querySelector("#popup-wrapper");
const POPUP_BACKGROUND = document.querySelector(".popup-background");
const POPUP_CLOSE_BUTTON = document.querySelector(".popup-close-icon__wrapper");
const POPUP_CONTENT_WRAPPER = document.querySelector("#popup-content__wrapper");
const POPUP_IMG_WRAPPER = document.querySelector(".popup-img-wrapper");
const POPUP_DESCRIPTION_WRAPPER = document.querySelector(
 ".popup-description__wrapper"
);
const SLIDER = document.querySelector(".slider-content");

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
  e.target.closest(".our-friends-card-wrapper").querySelector("p").innerHTML
 );
 showPopup();
});

POPUP_BACKGROUND.addEventListener("click", closePopup);
POPUP_CLOSE_BUTTON.addEventListener("click", closePopup);
