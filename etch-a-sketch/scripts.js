const sizeRange = document.querySelector("#sizeRange");
const container = document.querySelector(".grid-container");
const clearBtn = document.querySelector(".clear");
const eraserBtn = document.querySelector(".eraser");
let eraserStatus = false;

let drag = false;

let color = "black";

const buttonColor = document.querySelector("#input-color");

const setColor = function() {
    color = buttonColor.value;
}

const changeSize = function() {
    container.innerHTML = "";

    container.style.gridTemplateColumns = `repeat(${sizeRange.value*2}, auto)`;

    for (let i = 1; i <= 2*sizeRange.value**2; i++) {
        // container.innerHTML += `<div class="grid-item" onmouseover="paint(this)"></div>`;  
        let div = document.createElement('div');
        div.classList.add('grid-item');
        div.classList.add('border');
        div.addEventListener('mousedown', function() {
            drag = true;
        });
        div.addEventListener('mouseup', function() {
            drag = false;
        });
        div.addEventListener('mouseover', function() {
            if(drag === true) {
                div.style.backgroundColor = color;
            }
        });
        div.addEventListener('click', function() {
            div.style.backgroundColor = color;
        })
        container.appendChild(div);
    }
    
}

eraserBtn.addEventListener('click', function() {
    if(eraserStatus === false) {
        eraserStatus = true;
        color = "white";
        eraserBtn.classList.add("btnClick");
    }else{
        eraserStatus = false;
        setColor();
        eraserBtn.classList.remove("btnClick");
    }
})

clearBtn.addEventListener('click', changeSize);

changeSize();

