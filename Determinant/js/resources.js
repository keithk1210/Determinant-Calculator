class Coordinate {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    set setX(x) {
        this.x = x;
    }
    set setY(y) {
        this.y = y;
    }
}
//HTML elements
const determinantContainer = document.createElement("div");
determinantContainer.classList.add("determinant-container");
const determinantGrid = document.createElement("div");
determinantGrid.classList.add("determinant-grid");
determinantContainer.appendChild(determinantGrid);
const stepDisplayWords = document.createElement("p");
stepDisplayWords.classList.add("step-display-words");
const stepDisplayMath = document.createElement("p");
stepDisplayMath.classList.add("step-display-math");
const nextStepButton = document.createElement("div");
nextStepButton.classList.add("next-step-button");
nextStepButton.innerText = "Next Step";
const calculatorElements = [determinantContainer,stepDisplayWords,stepDisplayMath,nextStepButton];

const inputGrid = document.querySelector(".input-grid");
const infoMessage = document.querySelector(".info-msg");
const mainContent = document.querySelector(".main-content");
var determinantGridElements = createArray(3,3);
//important info
var matrix = createArray(3,3);
const root = getComputedStyle(document.documentElement);