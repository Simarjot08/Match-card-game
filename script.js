const cards = document.querySelectorAll(".card");
let cardOne, cardTwo;

let res = document.getElementById("result");
let newdiv = document.createElement("div");
function flipcard(e) {
  let clickedcard = e.target;

  if (clickedcard != cardOne) {
       clickedcard.classList.add("flip");
       if (!cardOne) {
       return (cardOne = clickedcard);
        }
    cardTwo = clickedcard;
    let cardOne_img = cardOne.querySelector("img").src;
    let cardTwo_img = cardTwo.querySelector("img").src;

    matchcards(cardOne_img, cardTwo_img);
  }
}

function matchcards(img1, img2) {
  console.log(img1, img2);
  if (img1 === img2) {
    newdiv.innerText = "Card  Matched";
    newdiv.style.color = "white";
    res.appendChild(newdiv);
    return;
  } else {
    setTimeout(() => {
      cardOne.classList.add("shake");
      cardTwo.classList.add("shake");
    }, 400);
    newdiv.innerText = "Card  Not Matched";
    newdiv.style.color = "white";
    res.appendChild(newdiv);
    console.log("card not matched");
  }
  setTimeout(() => {
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    res.removeChild(newdiv);
    cardOne = 0;
  }, 1200);
}

cards.forEach((card) => {
  card.addEventListener("click", flipcard);
});
