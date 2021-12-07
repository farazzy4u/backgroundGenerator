var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// This is how you test variables in Console
console.log(css);
console.log(color1);
console.log(color2);
console.log(gradient);

//body.style.background = "red"; Tested this to change background to red

function setGradient() {
  console.log(color1.value);
  console.log(color2.value);
  body.style.background =
    "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
