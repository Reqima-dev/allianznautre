const allFIlterItems = document.querySelectorAll(".product");
const allFilterBtns = document.querySelectorAll(".filter-btn");
const slider__container = document.querySelector(".slider__container");
const sliderSection = document.querySelector(".sliderSection");
const card_slider = document.querySelector(".card-slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

allFilterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    showFilteredContent(btn);
  });
});

function showFilteredContent(btn) {
  allFIlterItems.forEach((item) => {
    if (item.classList.contains(btn.id)) {
      resetActiveBtn();
      btn.classList.add("active-btn");
      item.style.display = "block";
      slider__container.classList.add("clic_container");
   //   sliderSection.classList.remove("sliderSection");

   //   card_slider.classList.remove("card-slider");
//      nextBtn.style.display = "none";
 //     prevBtn.style.display = "none";
    } else {
      item.style.display = "none";
    }
  });
}

function resetActiveBtn() {
  allFilterBtns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
}

/*--------- SLIDE GAMME PRODUIT SCRIPT */
("use strict");

const sliders = document.querySelectorAll("[data-slider]");

const sliderInit = function (currentSlider) {
  const sliderContainer = currentSlider.querySelector(
    "[data-slider-container]"
  );
  const reload = document.querySelector("#reload");
  const sliderPrevBtn = currentSlider.querySelector(" [data-slider-prev] ");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  const totalSliderVisibleItems = Number(
    getComputedStyle(currentSlider).getPropertyValue("--slider-items")
  );

  const totlaSliderItems =
    sliderContainer.childElementCount - totalSliderVisibleItems;

  let currentSlidePos = 0;

  /*------- NEXT SLIDE -------*/
  const slideNext = function () {
    currentSlidePos++;

    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;

    if (currentSlidePos >= totlaSliderItems)
      sliderNextBtn.setAttribute("disabled", "");
    sliderPrevBtn.removeAttribute("disabled");
  };

  sliderNextBtn.addEventListener("click", slideNext);

  /*--- Après avoir finir de scroller les produits le site se charge -------------*/
  const loading = function () {
    if (currentSlidePos >= totlaSliderItems)
      setTimeout(() => {
        window.location.reload(true);
      }, 40);
  };
  reload.addEventListener("click", loading);

  /*------- Prev SLIDE -------*/
  const slidePrev = function () {
    currentSlidePos--;

    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;

    if (currentSlidePos <= 0) sliderPrevBtn.setAttribute("disabled", "");
    sliderNextBtn.removeAttribute("disabled");
  };

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = totlaSliderItems <= 0;
  if (dontHaveExtraItem) sliderNextBtn.setAttribute("disabled", "");
  sliderPrevBtn.setAttribute("disabled", "");
};

for (let i = 0, len = sliders.length; i < len; i++) {
  sliderInit(sliders[i]);
}

/*---------- FILTER in PRODUCT PAGE ---------*/
const aside = document.querySelector("aside");
const filterAsideBtn = document.querySelector(".filterProduct");
const closeAside = document.querySelector(".closeAside");

filterAsideBtn.addEventListener("click", () => {
  aside.classList.toggle("activeFiltre");
});
closeAside.addEventListener("click", () => {
  aside.classList.remove("activeFiltre");
});
