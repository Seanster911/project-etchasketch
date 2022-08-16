const container = document.getElementById("container");
const resetButton = document.getElementById("resetButton");
let boxID = 0;
let boxSize = "60px";
console.log(container);



function drawBox(boxSize) {
    let newDiv = document.createElement("div");
    newDiv.style.width = boxSize;
    newDiv.style.height = boxSize;
    newDiv.className = "boxes";
    container.appendChild(newDiv);
    
};

function resetGrid() {
    let newLen = newNodeList.length;

    for (let i = 0; i < newLen; i++) {
        container.removeChild(newNodeList[i]);
    };

    let newHorizontal = window.prompt("Enter horizontal amount. No more than 100");
    let newVertical = window.prompt("Enter vertical amount. No more than 100");
    newGrid = newHorizontal * newVertical;
    boxSize = 960 / newHorizontal;
    for (i = 0; i < newGrid; i++) {
        drawBox(boxSize + "px");
    };

    newNodeList = document.querySelectorAll(".boxes");
    addEventsToNodeList();
};

function addEventsToNodeList() {
    let len = newNodeList.length;
    for (let i = 0; i < len; i++) {
        boxID = i;
        //this loop needs the nested function so that the eventlistener gets assigns the correct ID to
        //each node at while the loop is running. It didn't work with seperate function as i would've
        //already gone to the end, thus only the final box got changed.
        newNodeList[i].addEventListener("mouseover", function(e) {
            newNodeList[i].classList.add("hovered");
        });
    };
};

for (let i = 0; i < 256; i++) {
    drawBox(boxSize);
};

let newNodeList = document.querySelectorAll(".boxes"); 

addEventsToNodeList();
resetButton.addEventListener("click", resetGrid);