let numberOfSquares = 6;
let colors = [];
let pickedColor;

const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const heading = document.getElementById("heading");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init () {
    //mode button
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
            reset();
        });   
    }

    for (let i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab color of clicked square
            const clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                heading.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
            });
    }
reset();
}



function reset(){
    //generate all new colours
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //reset text in #reset
    resetButton.textContent = "New Colours"
    //reset text in span
    messageDisplay.textContent = "";
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }    
    }
    heading.style.backgroundColor = "steelblue"; 
}


resetButton.addEventListener("click", function(){
    reset();
})


function changeColors(color) {
    //loop through all squares
    for (let i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
      //make array
      let arr = [];
      //add num random colors to arr
      for (let i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
      }
      //return that array 
      return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255
    let r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    let g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}