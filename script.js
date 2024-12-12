const container = document.querySelector(".board");
container.style.border = "solid black 2px"
for(let i = 0; i < 16; i++ ) {
    const column = document.createElement("div");

    for(let j = 0; j < 16; j++) {
        const row = document.createElement("div");
        row.style.width = "30px";
        row.style.height = "30px";
        row.classList.add("square");
        column.appendChild(row);
    }
    
    container.appendChild(column);
    }

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = 'Black';
    })
})

const clearButton = document.querySelector(".btn");

clearButton.addEventListener('click', () => {
    const squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    })
})
