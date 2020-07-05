const colors = ["lightred", "orange", "yellow", "green", "lightblue"]

function changeColor() {
let colorIndex = Math.floor(Math.random() * (colors.length));
document.querySelector("body").style.backgroundColor = colors[colorIndex]; 
}
