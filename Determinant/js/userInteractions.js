var currentIndex = new Coordinate(0,0);
var currentStep = 0.0;

nextStepButton.onclick = function() {
    writeStep();
    colorGrid();
    currentStep += .5;
    if (currentStep > 0 && currentStep - Math.floor(currentStep) < 0.01) {
        currentIndex.setX = currentIndex.x + 1;
    }
}


window.onkeydown = function(event) {
    if (event.key == "Enter") {
        populateMatrix();
        console.log(matrix);
    }
}


function populateMatrix() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (isNaN(parseInt(inputGrid.children[y * 3 + x].value,10))) {
                infoMessage.innerText = "Make sure to input a number into each slot of the matrix";
                infoMessage.style.color = root.getPropertyValue("--warning-color");
                return;
            } else {
                matrix[y][x] = parseInt(inputGrid.children[y * 3 + x].value,0);
                }
            }
        }
        for(let i = 0; i < mainContent.children.length; i++) {
            mainContent.children[i].classList.add("fadeout");
        }
        setTimeout(function() {
            for(let i = 0; i < mainContent.children.length; i++) {
                mainContent.children[i].remove();
            }
        },900);
        
        console.log(matrix.length * matrix.length);
        setTimeout(function() {
            for(let i = 0; i < calculatorElements.length; i++) {
                calculatorElements[i].classList.add("fadein");
                mainContent.appendChild(calculatorElements[i]);
            }
        },1000)
        for(let i = 0; i < 9; i++) {
            let determinantGridItem = document.createElement("div");
            determinantGridItem.classList.add("determinant-grid-item");
            determinantGrid.appendChild(determinantGridItem);
        }
        writeNumbersInMatrix();
}