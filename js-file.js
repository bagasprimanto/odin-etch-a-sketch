const grid = document.querySelector("#grid");
const btnSetSquare = document.querySelector("#set-square");

function initializeGrid() {
    //Initialize the squares inside the grid
    drawSquares(16);

    //Add click event listener on button for setting number of squares
    btnSetSquare.addEventListener("click", setNumberOfSquares);
}

function setNumberOfSquares() {
    let numSquares;
    
    while(true) {

        //set numSquares to a numeric value of prompt
        numSquares = +prompt("Please enter the number of squares:");
        
        //Ensure that prompt value is a number
        //If it's not, then continue the loop
        if(isNaN(numSquares)) {
            alert('Error: Input is not a number'); 
            continue;
        }

        //Ensure that prompt value is a number at most 100
        //If it's not, then continue the loop
        if (numSquares > 100)  {
            alert("Error: Cannot create more than 100 squares per side");
            continue;
        }

        //Ensure that prompt value is a 
        //If it's not, then continue the loop
        if (numSquares <= 0) {
            alert("Error: Cannot enter empty string, negative, or zero");
            continue;
        }

        break; // exit the loop;
    }

    drawSquares(numSquares); //Draw the squares on the grid
}

function drawSquares(numSquares) {
    //Empty the grid
    emptyGrid();

    //Get the total width (without border width) of the grid
    let gridWidth = grid.clientWidth;

    //Determine the width of the squares 
    //based on the numSquares and the grid width
    let squareWidth = gridWidth / numSquares;

    //Loop for numSquares * numSquares times to 
    //draw each square inside the grid
    for (let i = 0; i < (numSquares * numSquares); i++) {
        let square = document.createElement("div");
    
        square.style.width = squareWidth + "px";
        square.style.height = squareWidth + "px";
        square.classList.add("square");
        square.addEventListener("mouseenter", () => {
            square.classList.add("highlight");
        });
    
        grid.appendChild(square);
    }
}

function emptyGrid() {
    grid.textContent = '';
}

initializeGrid();