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
        //this loop needs the nested function so that the eventlistener gets assigns the correct ID to
        //each node at while the loop is running. It didn't work with seperate function as i would've
        //already gone to the end, thus only the final box got changed.
        newNodeList[i].addEventListener("mouseover", function(e) {
            newNodeList[i].classList.add("hovered");
        });
    };
};

for (let i = 0; i < 256; i++) {
    drawBox();
};

let newNodeList = document.querySelectorAll(".boxes"); 

addEventsToNodeList();