/*---------------- SCROLL AND CHANGE NAVBAR -----*/

window.addEventListener("scroll", () => {
  document
    .querySelector("header")
    .classList.toggle("window-scroll", window.scrollY > 0);
});
/*----------------OPEN AND CLOSE MENU -----*/
const menu = document.querySelector("nav");
const open__nav = document.querySelector(".open__nav");
const close__nav = document.querySelector(".close__nav");

open__nav.addEventListener("click", () => {
  menu.style.display = "flex";
});

close__nav.addEventListener("click", () => {
  menu.style.display = "none";
});
/*-------------Verouiller le scroll lorsque le MENU est ouvert ----*/
const showDialog = () => {
  document.getElementById("dialog").classList.add("show");
  const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
  const body = document.body;
  body.style.position = "fixed";
  body.style.top = `-${scrollY}`;
};
const closeDialog = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = "";
  body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
  document.getElementById("dialog").classList.remove("show");
};
window.addEventListener("scroll", () => {
  document.documentElement.style.setProperty(
    "--scroll-y",
    `${window.scrollY}px`
  );
});

/*----------------CLOSE AND CLOSE MENU -----*/

/*----------- SLIDER HERO FUNCTION -----------*/
let index = 0;
let a = 0;
let sliderNew = document.getElementsByClassName("sliderN");
let line = document.getElementsByClassName("line");

function show(n) {
  for (a = 0; a < sliderNew.length; a++) {
    //slider.lenght=4
    sliderNew[a].style.display = "none";
  }
  for (a = 0; a < line.length; a++) {
    //line.lenght=4
    line[a].className = line[a].className.replace("active");
  }

  sliderNew[n - 1].style.display = "block";
  line[n - 1].className += " active"; // add space
}
auto();
function auto() {
  index++;
  if (index > sliderNew.length) {
    index = 1;
  }
  show(index);
  setTimeout(auto, 4000); //4secondes
}

function plusSlide(n) {
  index += n;
  if (index > sliderNew.length) {
    index = 1;
  }
  if (index < 1) {
    index = sliderNew.length;
  }
  show(index);
}

function currentSlide(n) {
  index = n;
  show(index);
}

/*----------- END SLIDER HERO FUNCTION -----------*/

/*----------------END SCROLL AND CHANGE NAVBAR -----*/

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay
  autoplay: {
    delay: 1000,
  },
  // RESPONSIVE BREAKPOINTS

  breakpoints: {
    // when windows width is > = 600px

    600: {
      slidesPerView: 2,
    },
    // when windows width is > = 1024px

    1024: {
      slidesPerView: 3,
    },
  },
});



