const gridNum = document.querySelector("#inputSize");
let painting = false;

// div that is the single grid

const changeGrid = document.querySelector("#changeGrid");
changeGrid.addEventListener("click", ()=>{
    containerDiv.innerHTML = '';
    let num = prompt("What's your desire grid number?");

    createGrid(num);
});

const containerDiv = document.querySelector("#container");


function createGrid(gridNum){
    for (let index = 0; index < gridNum*gridNum; index++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.height = `${960/gridNum -2}px`;
        console.log((960/gridNum -2));
        div.style.width = `${960/gridNum -2}px`;
        containerDiv.appendChild(div);
        div.addEventListener("mousedown",()=>{
            painting = true;
            addColorClass(div);
        });
        containerDiv.addEventListener("mouseup", ()=>{
            painting = false;
        });
        div.addEventListener("mouseover",()=>{
            if (painting){
                addColorClass(div);
            }
        });
    }
    
}

function addColorClass(selectClass){
    selectClass.classList.add("colored");
}
createGrid(16);



