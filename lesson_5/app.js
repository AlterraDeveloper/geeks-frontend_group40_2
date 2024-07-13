// DOM - Document Object Model

let emojiContainer = document.querySelector(".emoji-container");
let starsContainer = document.querySelector(".stars-container");

let stars = starsContainer.querySelectorAll("i");
let emojies = emojiContainer.querySelectorAll("i");

for (let i = 0; i < stars.length; i++) {
  let star = stars[i];
  star.addEventListener("click", function () {
    let rating = i + 1;
    updateRating(rating);
  });
}

function updateRating(rating) {
  
    for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    if (rating >= i + 1) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  }

  let colors = ["brown", "red", "deepskyblue", "gold", "green"];
  let emojiTranslate = - (rating - 1) * 80;
  for(let emoji of emojies){
    // emoji.style.transform = "translateX(" + emojiTranslate + "px)";
    emoji.style.transform = `translateX(${emojiTranslate}px)`;
    emoji.style.color = colors[rating - 1];
  }
}

updateRating(1);
