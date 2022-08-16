const container = document.getElementById("container");

console.log(container);



function drawBox() {
    let newDiv = document.createElement("div");
    newDiv.style.width = "60px";
    newDiv.style.height = "60px";
    newDiv.className = "boxes";
    container.appendChild(newDiv);
};

function shadeBox(e) {
    
}

for (let i = 0; i < 256; i++) {
    drawBox();
}

let newNodeList = container.childNodes; 