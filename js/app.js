import { country } from "./data.js";

const countries = ["United States", "Canada", "United Kingdom", "Mexico","Brazil", "Iran", "Spain",
  "Italy", "Germany","France", "Sweden", "China", "Japan", "Korea", "Singapore",
];

const fruits = ["apple", "orange", "banana", "grape", "strawberry", "watermelon", "pineapple",
  "melon", "pear", "peach", "mango", "avocado",
];

const color =["red", "white", "black", "blue", "green", "purple", "pink", "yellow", "grey",
  "silver", "gold", "brown",
];

const underscore = [];
let lifeLeft = 3;

let guessLetter;
let splitWord;

//hidden word display
const hiddenWord = document.getElementById('word');
//hidden word in underscore
const displayUnderscore = document.getElementById('hidden');
//players life display
const displayPlayerLife = document.getElementById('life')
//player status if the player won or lost the game
const displayPlayerStatus = document.getElementById('playerGameStatus')
//pop up-display platerStatus
const modalContainer = document.getElementById('modal-container');


//button categories for the hidden word
const pickCountry = document.querySelector(".choiceCountry");
const pickFruit = document.querySelector(".choiceFruit");
const pickColor = document.querySelector(".choiceColor");

//button letters a-z
const pickLetter = document.querySelectorAll(".letter");


//when user picks a hidden word category
pickCountry.addEventListener('click', (event) => {
  resetArray(underscore);
  let randomCountry = getRandom(countries);
  console.log("random country is:", randomCountry);
  hiddenWord.innerText = [randomCountry];
  console.log(randomCountry.length);

  for(let i =0; i< randomCountry.length; i++) {
    if (randomCountry[i] === " ") {
      underscore.push("space!")
    }else{
      underscore.push("_");
    }
  }
  displayUnderscore.innerText = underscore.join(" "); //removes the ","
  console.log(underscore);
  console.log("testing inntertext in the browser:", hiddenWord.innerText)
});


pickFruit.addEventListener('click', (event) => {
  resetArray(underscore);
  let randomFruit = getRandom(fruits);
  hiddenWord.innerText = [randomFruit];
  generateUnderscore(randomFruit);
  displayUnderscore.innerText = underscore.join(" "); //removes the ","


});

pickColor.addEventListener('click', (event) => {
  resetArray(underscore);
  let randomColor = getRandom(color);
  hiddenWord.innerText = [randomColor];
  generateUnderscore(randomColor);
  displayUnderscore.innerText = underscore.join(" "); //removes the ","
});

//when user clicks the keyboard
pickLetter.forEach((button) => { 
  button.addEventListener('click',(event) => {
    let displayLetter = event.target.innerText
    guessLetter = event.target.innerText //guessLetter is a String via the text element
    
    //make hiddenWord.innerText into an array using SplitWord
    let arrayWord = hiddenWord.innerText
    splitWord = arrayWord.split("")
    checkLetter();
    playerStatus();
  })
})

function generateUnderscore (randomPick) {
  for(let i =0; i< randomPick.length; i++) {
    if (randomPick[i] === " ") {
      underscore.push("space!")
    }else{
      underscore.push("_");
    }
  }
}


function playerStatus () {
  let stringifyUnderscore = JSON.stringify(underscore);
  let stringifySplitWord = JSON.stringify(splitWord);
  
  if (lifeLeft === 0) {
    displayPlayerStatus.innerText = "You Lost";
    modalContainer.classList.add('show');
  }else if (stringifyUnderscore === stringifySplitWord) {
    displayPlayerStatus.innerText = "You Won";
    modalContainer.classList.add('show');
  }

}


//check the letter and removes life if guessed wrong
function checkLetter() {
  for (let i=0; i <splitWord.length; i++) {
    if (guessLetter.toLowerCase() === splitWord[i].toLowerCase()) {
      underscore[i] = guessLetter;
      displayUnderscore.innerText = underscore.join(" ")
      console.log("check underscore array : ", underscore, "check answer array: ", splitWord)
    
      //life removes
    } else if(!splitWord.includes(guessLetter)) {
      lifeLeft -= 1;
      displayPlayerLife.innerText = lifeLeft; //displays the current life in the browser
      return;
    }
  }
}



//generates random list in the array
function getRandom(category) {
  return category[Math.floor(Math.random() * category.length)].toUpperCase();
  //returns all random array of string into an UPPERCASE letters
}

//resets the array into empty
function resetArray(array) {
  return array.length =[];
}