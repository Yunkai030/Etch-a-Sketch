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
    // Add the range check to ensure the performance
    if ((gridNum <= 100) &&(gridNum > 0)){
        for (let index = 0; index < gridNum*gridNum; index++) {
            const div = document.createElement("div");
            div.classList.add("square");
            div.style.height = `${800/gridNum -2}px`;
            
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
    else{
        alert("Over the maximum number, please choose from 0-100!");
        createGrid(16);
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

const buttonRainbow = document.querySelector("#rainbow");
buttonRainbow.addEventListener("click",rainbow);

function rainbow(){
    mode = "rainbow"
}


function getActiveColor() {
    if (mode==="eraser"){
        return "#FFFFFF";
    }
      if (mode === 'rainbow') {
        return createRainbowColor();
  }
    else{
        return currentColor;
    }
}

function createRainbowColor(){
    let r = Math.floor(Math.random() * 256);;
    let g = Math.floor(Math.random() * 256);;
    let b = Math.floor(Math.random() * 256);;
    return `rgb(${r},${g},${b})`;
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



