const gridNum = document.querySelector("#inputSize");
let painting = false;
let lastGridNumber = 16;
let currentColor = "#000000";
let mode = "pen";

const colorPicker = document.querySelector("#colorPicker");

const buttonClear = document.querySelector("#clear");
buttonClear.addEventListener("click",clearGrid);

// div that is the single grid
const changeGrid = document.querySelector("#changeGrid");
changeGrid.addEventListener("click", ()=>{
    containerDiv.innerHTML = '';
    let num = prompt("What's your desire grid number?");
    lastGridNumber = num;
    createGrid(num);
});

const containerDiv = document.querySelector("#container");


function createGrid(gridNum){
    for (let index = 0; index < gridNum*gridNum; index++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.height = `${800/gridNum -2}px`;
        console.log((960/gridNum -2));
        div.style.width = `${800/gridNum -2}px`;
        containerDiv.appendChild(div);
        div.addEventListener("mousedown",(e)=>{
             e.preventDefault();
            painting = true;
            addColorClass(div);
        });
         div.addEventListener("mouseover",()=>{
            if (painting){
                addColorClass(div);
            }
        });
        
        
    }
   

}



document.addEventListener("mouseup", ()=>{
            painting = false;
        });


function clearGrid() {
    containerDiv.innerHTML = "";
    createGrid(lastGridNumber);
}

function eraser() {
    mode = "eraser";
    
}

const buttonPen = document.querySelector("#pen");
buttonPen.addEventListener("click",pen);

function pen(){
    mode = "pen";
}


function getActiveColor() {
    if (mode==="eraser"){
        return "#FFFFFF";
    }
    else{
        return currentColor;
    }
}

const eraserButton = document.querySelector("#eraser");
eraserButton.addEventListener("click",eraser);

function addColorClass(selectClass){
    selectClass.style.backgroundColor = getActiveColor();
}

colorPicker.addEventListener("input", function() {
    currentColor = this.value; // new color
});

createGrid(16);



