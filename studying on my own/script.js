const display = document.getElementById("display");

function appendToDisplay(input){
    display.textContent += input;
}

function ClearDisplay(){
    display.textContent = ""
}

function calculate(){
    display.innerHTML = eval(display.value)
}