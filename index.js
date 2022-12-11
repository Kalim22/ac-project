// Scrolling navbar

// let header = document.querySelector("header");
// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 10) {
//     header.style.position = "fixed";
//     header.style.top = 0;
//     header.style.background = "white";
//   } else {
//     header.style.position = "relative";
//   }
// });

// let heroSectionLoader = document.querySelector(".hero-section-loader");
// window.addEventListener("load", () => {
//   heroSectionLoader.style.transform = "translateX(-100%)";
// });

// scrolling services cards

let servicesCards1 = document.querySelector(".card1");
let servicesCards2 = document.querySelector(".card2");
let servicesCards3 = document.querySelector(".card3");
let servicesCards4 = document.querySelector(".card4");

let heroSectionContent = document.querySelector(".hero-section-content");

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  let scrollVal = scroll * 0.5;
  let scrollOpacityVal = scroll * 0.0021;

  servicesCards1.style.left = `${scrollVal * 0.001}%`;
  servicesCards2.style.left = `${scrollVal * 0.039}%`;
  servicesCards3.style.left = `${scrollVal * 0.076}%`;
  servicesCards4.style.left = `${scrollVal * 0.112}%`;

  heroSectionContent.style.opacity = `${1 - scrollOpacityVal}`;
  heroSectionContent.style.transform = `translateY(${scrollVal * 0.3}%)`;
});
