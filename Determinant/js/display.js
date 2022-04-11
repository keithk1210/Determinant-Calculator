function assignGridElementsToArray() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            determinantGridElements[y][x] = determinantGrid.children[y * 3 + x];
        }
    }
}

function writeNumbersInMatrix() {
    assignGridElementsToArray();
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            const numberHolder = document.createElement("span");
            numberHolder.innerText = matrix[y][x];
            determinantGridElements[y][x].appendChild(numberHolder);
        }
    }

}

function writeStep() {
    if (currentStep == matrix.length) {
        let num1 = calculate2x2Matrix(matrix,new Coordinate(0,0)) * Math.pow(-1,1 + 1) * matrix[0][0];
        let num2 = calculate2x2Matrix(matrix,new Coordinate(1,0)) * Math.pow(-1,2 + 1) * matrix[0][1];
        let num3 = calculate2x2Matrix(matrix,new Coordinate(2,0)) * Math.pow(-1,3 + 1) * matrix[0][2];
        stepDisplayWords.innerText = "Add up the results of your " + matrix.length + " calculations";
        stepDisplayMath.innerText = formatNumber(num1,1) + " + " + formatNumber(num2,2) + " + " + formatNumber(num3,3) + " = "  + (num1 + num2 + num3);
    } else if (currentStep - Math.floor(currentStep) < .01) {
        let number = Math.pow(-1, currentIndex.x + 1 + currentIndex.y + 1) * matrix[currentIndex.y][currentIndex.x];
        stepDisplayWords.innerText = "Multiply -1 raised to the power of the sum of the current cell's position (" + ( currentIndex.x + 1 ) + ", " + (currentIndex.y + 1) + ") and the value of the current cell (" + matrix[currentIndex.y][currentIndex.x] + ")";
        stepDisplayMath.innerText = "(-1)^(" + (currentIndex.x + 1) + " + " + (currentIndex.y + 1) + ") * " + matrix[currentIndex.y][currentIndex.x] + " = " + number;
    } else if (currentStep - Math.floor(currentStep > .01)) {
        let twoByTwoMatrix = obtain2x2Matrix(matrix, currentIndex);
        let number = Math.pow(-1, currentIndex.x + 1 + currentIndex.y + 1) * matrix[currentIndex.y][currentIndex.x];
        stepDisplayWords.innerText = "Take the result of your previous calculation and multiply it by the 2x2 matrix that remains.";
        stepDisplayMath.innerText = number + " * [(" +  twoByTwoMatrix[0][0] + " * " + twoByTwoMatrix[1][1] + ") - (" + twoByTwoMatrix[1][0] + " * " + twoByTwoMatrix[0][1] + ")] = " + (calculate2x2Matrix(matrix,currentIndex) * number);
    }
}

function formatNumber(number, position) {
    return ((number < 0 && position != 1) ? "(" + number + ")" : number);
}


function colorGrid() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            determinantGridElements[y][x].style.background = root.getPropertyValue("--highlight-color");
        }
    }
    if (currentStep - Math.floor(currentStep) < .01) {
        determinantGridElements[currentIndex.y][currentIndex.x].style.background = root.getPropertyValue("--selected-color");
    } else if (currentStep - Math.floor(currentStep > .01)) {
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (x != currentIndex.x && y != currentIndex.y) {
                    determinantGridElements[y][x].style.background = root.getPropertyValue("--selected-color");
                }
            }
        }
    }
}