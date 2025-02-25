import { country } from "./data.js";

const countries = ["United States", "Canada", "United Kingdom", "Mexico","Brazil", "Iran", "Spain",
  "Italy", "Germany","France", "Sweden", "China", "Japan", "Korea", "Singappore",
];

const fruits = ["apple", "orange", "banana", "grape", "strawberry", "watermelon", "pineapple",
  "melon", "pear", "peach", "mango", "avocado",
];

const color =["red", "white", "black", "blue", "green", "purple", "pink", "yellow", "grey",
  "silver", "gold", "brown",
];

const Underscore = []
//
const life = 3

//hidden word display
const hiddenWord = document.getElementById('word');
const displayUnderscroe = document.getElementById('hidden');

//button categories for the hidden word
const pickCountry = document.querySelector(".choiceCountry");
const pickFruit = document.querySelector(".choiceFruit");
const pickColor = document.querySelector(".choiceColor");
//button letters a-z
const pickLetter = document.querySelectorAll(".letter");


//when user picks a hidden word category
pickCountry.addEventListener('click', (event) => {

  let randomCountry = getRandom(countries);
  
  console.log("random country is:", randomCountry);
  hiddenWord.innerText = [randomCountry];
  console.log(randomCountry.length);

  for(let i =0; i< randomCountry.length; i++) {
    Underscore.push("_");
  }
  displayUnderscroe.innerText = Underscore;
  console.log(Underscore)
  
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
    console.log(event.target.innerText);
  } )
})

//displaying _ _ _ _
function selectWord (randomWord) {
  for (let i=0; i< randomWord.length; i++) {
    randomWord
  }
}

function getRandom(category) {
  return category[Math.floor(Math.random() * category.length)]
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