// window.addEventListener("DOMContentLoaded", function () {

  const $prevBtn = document.querySelector("#btn-prev");
  const $nextBtn = document.querySelector("#btn-next");

  const $imageContainer = document.querySelector(".image-container");
//   const $sliderIndex = document.querySelector("#index");

  let currentSlideIndex = 0;

  renderSlider();

  $prevBtn.addEventListener("click", function () {
    if (canMoveToPrev()) {
      currentSlideIndex--;
      renderSlider();
    }
  });

  $nextBtn.addEventListener("click", function () {
    if (!canMoveToNext()) return;
    currentSlideIndex++;
    renderSlider();
  });

  function canMoveToPrev() {
    return currentSlideIndex !== 0;
  }

  function cannotMoveToPrev() {
    return currentSlideIndex !== 0;
  }

  function canMoveToNext() {
    const imagesCount = $imageContainer.children.length;
    return imagesCount > currentSlideIndex + 1;
  }

  function renderSlider() {
    const offset = -500 * currentSlideIndex;
    $imageContainer.style.transform = `translateX(${offset}px)`;
    //   $sliderIndex.innerText = currentSlideIndex;

    $prevBtn.style.display = canMoveToPrev() ? "block" : "none";
    $nextBtn.style.display = canMoveToNext() ? "block" : "none";
    //   $nextBtn.style.opacity = canMoveToNext() ? "1" : "0";

    //   if (canMoveToPrev()) {
    //     $prevBtn.style.display = "block";
    //   } else {
    //     $prevBtn.style.display = "none";
    //   }

    //   if (canMoveToNext()) {
    //     $nextBtn.style.opacity = "1";
    //   } else {
    //     $nextBtn.style.opacity = "0";
    //   }
  }
// });
