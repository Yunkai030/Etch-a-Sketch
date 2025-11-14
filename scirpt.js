let gridNum = 16;

// div that is the single grid



const containerDiv = document.querySelector("#container")


function createGrid(){
    for (let index = 0; index < 256; index++) {
        const div = document.createElement("div");
        div.classList.add("square");
        containerDiv.appendChild(div);
    }
    
}

createGrid();

