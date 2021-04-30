const firstDot = document.querySelector(".dot");
const secondDot = firstDot.nextElementSibling;
const thirdDot = secondDot.nextElementSibling;
const fourthDot = thirdDot.nextElementSibling;
const dots = [firstDot, secondDot, thirdDot, fourthDot];

const firstSliderImg = document.querySelector(".first-slider-image");
const secondSliderImg = document.querySelector(".second-slider-image");
const thirdSliderImg = document.querySelector(".third-slider-image");
const fourthSliderImg = document.querySelector(".fourth-slider-image");
const sliderImages = [
  firstSliderImg,
  secondSliderImg,
  thirdSliderImg,
  fourthSliderImg,
];

//arrows

const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentSliderImg = 1;

firstDot.style.backgroundColor = "#ffcd19";

const changeImageToNext = () => {
  gsap.to(sliderImages[currentSliderImg - 1], {
    duration: 1.5,
    opacity: 0,
    display: "none",
  });
  dots[currentSliderImg - 1].style.backgroundColor = "white";
  if (currentSliderImg === 4) {
    currentSliderImg = 1;
  } else {
    currentSliderImg += 1;
  }
  gsap.to(sliderImages[currentSliderImg - 1], {
    duration: 1.5,
    opacity: 1,
    display: "block",
  });
  dots[currentSliderImg - 1].style.backgroundColor = "#ffcd19";
};

const changeImageToPrevious = () => {
  gsap.to(sliderImages[currentSliderImg - 1], {
    duration: 1.5,
    opacity: 0,
    display: "none",
  });
  dots[currentSliderImg - 1].style.backgroundColor = "white";
  if (currentSliderImg === 1) {
    currentSliderImg = 4;
  } else {
    currentSliderImg -= 1;
  }
  gsap.to(sliderImages[currentSliderImg - 1], {
    duration: 1.5,
    opacity: 1,
    display: "block",
  });
  dots[currentSliderImg - 1].style.backgroundColor = "#ffcd19";
};

rightArrow.addEventListener("click", changeImageToNext);
leftArrow.addEventListener("click", changeImageToPrevious);

//function that changes images automatically

setInterval(() => {
  changeImageToNext();
}, 5000);

//function to change images easly when back-end is ready

const changeSliderImg = (imgNumber, imgSrc) => {
  sliderImages[imgNumber - 1].firstElementChild.src = imgSrc;
};

//mobile menu handler

const mobileMenuIcon = document.querySelector(".mobile-menu-icon-wrapper");
let mobileMenuStatus = "closed";

mobileMenuIcon.addEventListener("click", () => {
  if (mobileMenuStatus === "closed") {
    gsap.to(".mobile-menu-wrapper", {
      duration: 1,
      display: "flex",
      y: 300,
    });
    gsap.to(".mobile-menu-icon-wrapper", { y: 170, delay: 0.41});
    gsap.to("#only-closed", { opacity: 0, duration: 1 });

    mobileMenuStatus = "opened";
  } else {
    gsap.to(".mobile-menu-wrapper", {
      duration: 1,
      display: "none",
      y: -300,
    });
    gsap.to(".mobile-menu-icon-wrapper", { y: 0 });
    gsap.to("#only-closed", { opacity: 1 });
    mobileMenuStatus = "closed";
  }
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
const navbar = document.getElementById("navbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
