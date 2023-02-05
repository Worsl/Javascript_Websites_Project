const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);

const randomDiceImage = "dice" + randomNumber1 + ".png";
const randomDiceImage2 = "dice" + randomNumber2 + ".png";

const image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

const image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);


const text = document.querySelector("#text");
if (randomNumber1 > randomNumber2){
    text.innerHTML = "🚩player one wins!"
} else if (randomNumber1 < randomNumber2){
    text.innerHTML = "player two wins!🚩"
} else{
    text.innerHTML = "draw";
}


const button = document.querySelector("button");
button.addEventListener("click",() => {
    location.reload();
});