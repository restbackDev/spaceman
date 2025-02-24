const countries = ["United States", "Canada", "United Kingdom", "Mexico","Brazil", "Iran", "Spain",
  "Italy", "Germany","France", "Sweden", "China", "Japan", "Korea", "Singappore",
]

const fruits = ["apple", "orange", "banana", "grape", "strawberry", "watermelon", "pineapple",
  "melon", "pear", "peach", "mango", "avocado"
]

const color =["red", "white", "black", "blue", "green", "purple", "pink", "yellow"]

const hiddenWord = document.getElementById('word')



function getRandom(category) {
  return category[Math.floor(Math.random() * category.length)]
}

console.log(getRandom(fruits));








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