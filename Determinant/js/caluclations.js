

function calculateDeterminant() {
    let currentIndex = new Coordinate(0,0);
    let result = 0;
    for (let i = 0; i < matrix.length; i++) {
        console.log( "(-1)^(" + (i+1+currentIndex.y + 1) + ") * " + calculate2x2Matrix(matrix, currentIndex) + " * " + matrix[0][i])
        result += Math.pow(-1,(i+1) + (currentIndex.y + 1)) * calculate2x2Matrix(matrix, currentIndex) * matrix[0][i];
        currentIndex.setX = currentIndex.x + 1;
    }
    console.log(result);
}

function obtain2x2Matrix(matrix, currentIndex) {
    let twoByTwoMatrix = createArray(2,2);
    let currentIndexIn2x2Matrix = new Coordinate(0,0);
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (x != currentIndex.x && y != currentIndex.y) {
                twoByTwoMatrix[currentIndexIn2x2Matrix.y][currentIndexIn2x2Matrix.x] = matrix[y][x];
                updateCurrentIndexIn2x2Matrix(currentIndexIn2x2Matrix);
            }
        }
    }
    console.log(twoByTwoMatrix[0][0] + " * " + twoByTwoMatrix[1][1] + " - " +  twoByTwoMatrix[0][1] + " * " +  twoByTwoMatrix[1][0]);
    return twoByTwoMatrix;
}

function calculate2x2Matrix(matrix, currentIndex) {
    let twoByTwoMatrix = obtain2x2Matrix(matrix, currentIndex);
    return twoByTwoMatrix[0][0] * twoByTwoMatrix[1][1] - twoByTwoMatrix[0][1] * twoByTwoMatrix[1][0];
}


function updateCurrentIndexIn2x2Matrix(index) {
    index.setX = index.x + 1;
    if (index.x > 1) {
        index.x = 0;
        index.setY = index.y + 1;
    }
}