"use strict";

const formContent = document.querySelectorAll("[data-content]");

const formInit = function (formsData) {
  const formContainer = formsData.querySelector("[data-form-container]");

  const formPrevBtn = formsData.querySelector("[data-form-prev]");
  const formNextBtn = formsData.querySelector("[data-form-next]");

  const totalFormVisibleItems = Number(
    getComputedStyle(formsData).getPropertyValue("--forms-items")
  );

  const totlaFormItems =
    formContainer.childElementCount - totalFormVisibleItems;
  let currentFormPos = 0;

  /*------- NEXT SLIDE -------*/
  const formNext = function () {
    currentFormPos++;

    formContainer.style.transform = `translateX(-${formContainer.children[currentFormPos].offsetLeft}px)`;
    if (currentFormPos >= totlaFormItems)
      formNextBtn.setAttribute("disabled", "");
    formPrevBtn.removeAttribute("disabled");
  };

  formNextBtn.addEventListener("click", formNext);

  /*------- Prev SLIDE -------
  const formPrev = function () {
    currentFormPos--;

    formContainer.style.transform = `translateX(-${formContainer.children[currentFormPos].offsetLeft}px)`;

    if (currentFormPos <= 0) formPrevBtn.setAttribute("disabled", "");
    formNextBtn.removeAttribute("disabled");
  };

  formPrevBtn.addEventListener("click", formPrev);
*/
  const dontHaveExtraItem = totlaFormItems <= 0;
  if (dontHaveExtraItem) formNextBtn.setAttribute("disabled", "");
  formPrevBtn.setAttribute("disabled", "");
};

for (let i = 0, len = formContent.length; i < len; i++) {
  formInit(formContent[i]);
}

