// Scrolling navbar

const contactDiv = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    contactDiv.style.position = "fixed";
    contactDiv.style.top = 0;
    contactDiv.style.background = "white";
  }
  if (window.pageYOffset < 100) {
    contactDiv.style.position = "relative";
  }
});

// let heroSectionLoader = document.querySelector(".hero-section-loader");
// window.addEventListener("load", () => {
//   heroSectionLoader.style.transform = "translateX(-100%)";
// });

// scrolling services cards

let servicesCards1 = document.querySelector(".card1");
let servicesCards2 = document.querySelector(".card2");
let servicesCards3 = document.querySelector(".card3");
let servicesCards4 = document.querySelector(".card4");
let servicesCards5 = document.querySelector(".card5");
let servicesCards6 = document.querySelector(".card6");
let servicesCards7 = document.querySelector(".card7");
let servicesCards8 = document.querySelector(".card8");

let allServicesCards = document.querySelectorAll(".cards");

let herosection = document.querySelector(".hero-section");
let heroSectionContent = document.querySelector(".hero-section-content");

let herosectionheading = document.querySelector(".hero__section__heading");
let herosectioncontent = document.querySelector(".hero__section__content");
let btns = document.querySelector(".btns");
window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  let scrollVal = scroll * 0.5;
  let scrollOpacityVal = scroll * 0.0025;

  if (window.pageYOffset > 1) {
    heroSectionContent.style.opacity = ` ${1 - scrollOpacityVal}`;
    herosectionheading.style.transform = `translateX(${scrollVal * 0.19}%)`;
    herosectioncontent.style.transform = `translateX(${scrollVal * 0.3}%)`;
    btns.style.transform = `translateX(${-scrollVal * 0.2}%)`;
  }
});

let contact = document.getElementById("contact");
let services = document.querySelector(".services");

// function viewport(element) {
//   let rect = element.getBoundingClientRect();

//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= window.innerHeight &&
//     rect.right <= window.innerWidth
//   );
// }

// document.addEventListener("scroll", () => {
//   if (viewport(services)) {
//     let scroll = window.pageYOffset;
//     let scrollVal = scroll * 0.5;

//     // servicesCards1.style.left = `${scrollVal * 0.004}%`;
//     // servicesCards2.style.left = `${scrollVal * 0.039}%`;
//     // servicesCards3.style.left = `${scrollVal * 0.076}%`;
//     // servicesCards4.style.left = `${scrollVal * 0.112}%`;
//     servicesCards1.style.left = `2%`;
//     servicesCards2.style.left = `27%`;
//     servicesCards3.style.left = `52%`;
//     servicesCards4.style.left = `77%`;
//     servicesCards5.style.left = `2%`;
//     servicesCards6.style.left = `27%`;
//     servicesCards7.style.left = `52%`;
//     servicesCards8.style.left = `77%`;
//   }
// });
