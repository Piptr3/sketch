const container = document.querySelector(".board");
container.style.border = "solid black 2px"

function createGrid(size) {
    container.innerHTML = "";

    const squareSize = 480 / size;

    for(let i = 0; i < size; i++ ) {
        const row = document.createElement("div");
    
        for(let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.classList.add("square");

            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = 'Black';
            })

            row.appendChild(square);
        }
        
        container.appendChild(row);
        }
}

const clearButton = document.querySelector("#clearBtn");

clearButton.addEventListener('click', () => {
    const squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    })
})

const sizeButton = document.querySelector("#sizeBtn");

sizeButton.addEventListener('click', () => {
    let size = prompt("Select size.");

    size = parseInt(size);

    createGrid(size);
})

createGrid(16);