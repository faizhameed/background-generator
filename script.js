var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var colorcode = document.querySelector("h2  ");
setGradient();


function setGradient() {
    body.style.background =
        `linear-gradient(to right, ${color1.value} ,${color2.value})`;

    colorcode.textContent = `The two Color used ${color1.value} and ${color2.value}`;
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
