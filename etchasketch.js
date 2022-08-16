const container = document.getElementById("container");
let boxID = 0;
console.log(container);



function drawBox() {
    let newDiv = document.createElement("div");
    newDiv.style.width = "60px";
    newDiv.style.height = "60px";
    newDiv.className = "boxes";
    container.appendChild(newDiv);
    
};

function addEventsToNodeList() {
    let len = newNodeList.length;
    for (let i = 0; i < len; i++) {
        boxID = i;
        newNodeList[i].addEventListener("mouseover", shadeBox);
    };
};

function shadeBox() {
    newNodeList[boxID].style.backgroundColor = "black";
    console.log(newNodeList[boxID]);
};

for (let i = 0; i < 256; i++) {
    drawBox();
};

let newNodeList = document.querySelectorAll(".boxes"); 

addEventsToNodeList();