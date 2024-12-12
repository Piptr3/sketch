const container = document.querySelector(".board");

    for(let i = 0; i < 16; i++ ) {
        const column = document.createElement("div");

    for(let j = 0; j < 16; j++) {
        const row = document.createElement("div");
        row.style.border = "red solid 1px";
        row.style.width = "20px";
        row.style.height = "20px";
        column.appendChild(row)
    }
    container.appendChild(column);
    }