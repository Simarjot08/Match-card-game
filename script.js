const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;
let disableDeck=false;// to secure others cards not to add flip class
let count=0;

let res = document.getElementById("result");


function flipcard(e) {
  let clickedcard = e.target;

  if (clickedcard !== cardOne && !disableDeck) {
       clickedcard.classList.add("flip");
       if (!cardOne) {
       return (cardOne = clickedcard);
        }
    cardTwo = clickedcard;

    disableDeck=true;
    console.log(cardOne,cardTwo);
    let cardOne_img = cardOne.querySelector("img").src;
    let cardTwo_img = cardTwo.querySelector("img").src;

    matchcards(cardOne_img, cardTwo_img);
  }
}

function matchcards(img1, img2) {
  console.log(img1, img2);
  if (img1 === img2) {
    count++;
    if(count==8)
    {

      setTimeout(()=>{
     res.innerHTML = "<h1>Completed </h1>";
    res.style.color = "white";
    res.style.visibility="visible";
      },4000)
      setTimeout(()=>{
  
      return shuffleCard();
      
      },5000); 
    }

    cardOne.removeEventListener("click",flipcard);
    cardTwo.removeEventListener("click",flipcard);
    cardOne=cardTwo="";
    res.innerText = "Card  Matched";
    res.style.color = "white";
    res.style.visibility="visible";
    setTimeout(()=>{
      res.innertext="";
      res.style.visibility="hidden";
    },1200);
    
    return disableDeck=false;
  } else {
    setTimeout(() => {
      cardOne.classList.add("shake");
      cardTwo.classList.add("shake");
    }, 400);
     res.innerText = "Card  Not Matched";
    res.style.color = "white";
    res.style.visibility="visible";
    console.log("card not matched");
  }
  setTimeout(() => {
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne=cardTwo="";
       res.innertext="";
      res.style.visibility="hidden";
    disableDeck=false;
    cardOne = 0;
  }, 1200);
}
//to restart game 

function shuffleCard(){
  count=0;
  cardOne=cardTwo="";
  disableDeck=false;
  let arr=[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
  arr.sort(()=>(Math.random()>0.5?1:-1));
   cards.forEach((card,i) => {
  card.classList.remove("flip");
  let imgTag=card.querySelector("img");
  imgTag.src=`images/img-${arr[i]}.png`;
  card.addEventListener("click", flipcard);
     res.innerHTML = "";
    res.style.color = "white";
    res.style.visibility="visible";
});
}
shuffleCard();

cards.forEach((card) => {
  card.addEventListener("click", flipcard);
});
