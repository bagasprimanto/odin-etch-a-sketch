const grid = document.querySelector("#grid");

function initializeGrid() {

    for (let i = 0; i < 256; i++) {
        let square = document.createElement("div");
    
        square.setAttribute("class", "square");
        square.addEventListener("mouseenter", () => {
            square.classList.add("highlight");
        });
    
        grid.appendChild(square);
    }
}

initializeGrid();