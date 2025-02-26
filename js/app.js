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
let displayPlayerLife = document.getElementById('life')

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
  let randomFruit = getRandom(fruits);
  console.log("random fruit is:", randomFruit);
  hiddenWord.innerText = [randomFruit];
});

pickColor.addEventListener('click', (event) => {
  let randomColor = getRandom(color);
  console.log("random color is:", randomColor);
  hiddenWord.innerText = [randomColor];
});

//when user clicks the keyboard
pickLetter.forEach((button) => { 
  button.addEventListener('click',(event) => {
    let displayLetter = event.target.innerText
    console.log(displayLetter);
    console.log("sample",hiddenWord.innerText)
    guessLetter = event.target.innerText //guessLetter is a String via the text element
    
    //make hiddenWord.innerText into an array using SplitWord
    let arrayWord = hiddenWord.innerText
    splitWord = arrayWord.split("")
    console.log("length:", splitWord.length);
    console.log("array:", splitWord);
    checkLetter();
  })
})

function checkLetter() {
  for (let i=0; i <splitWord.length; i++) {
    if (guessLetter.toLowerCase() === splitWord[i].toLowerCase()) {
      underscore[i] = guessLetter;
      console.log("compare",underscore)
      displayUnderscore.innerText = underscore.join(" ")
      console.log("check underscore array : ", underscore, "check answer array: ", splitWord)
    //life removes
    } else if(!splitWord.includes(guessLetter)) {
      lifeLeft -= 1;
      displayPlayerLife.innerText = lifeLeft; //displays the cuurent life
      console.log("lives", lifeLeft)
   
      return;
    }
  }
}



//generates random list in the array
function getRandom(category) {
  return category[Math.floor(Math.random() * category.length)].toUpperCase();
  //returns all random array of string into an UPPERCASE
}

//resets the array into empty
function resetArray(array) {
  return array.length =[];
}

//remove lives
function playerLife (lifeLeft) {
  lifeLeft --;
  console.log("function: ");
}

function playerStatus (hiddenAnswer, guessedAnswer) {
  if (hiddenAnswer === guessedAnswer) {
    console.log("You Won")
  }else {
    console.log("You Lost")
  }
}



// const button = document.querySelector(".button").addEventListener('click',display);
// document.querySelector(.button).innerText


//   button.style.display ='hide';
// }
// function display(event) {

// /*

// 1. add an event lisenter, to the their keyboard

// 2. create a function to determine if the letter clicked or types matches
//   if the letter picked matches with the hidden word
//     the letter is displayed in a div of letters guessed
//     the letter is displayed , games continues
//   else if the letter does not match the hidden word,
//     the letter is displayed in a div of letters guessed
//     and the rocket will (1) will be removes 
  
//   if there are no more rockets left
//     player lost

  

// COM display a message if they WON or LOSS
// wrap a keys 

// functions activates to the event listener
  
//     */