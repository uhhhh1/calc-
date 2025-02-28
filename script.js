let addition = document.querySelector(".addition")
let subtraction = document.querySelector(".subtraction")
let multiplication = document.querySelector(".multipilication")
let division = document.querySelector(".division")
let squareRoot = document.querySelector(".square-root")
let equals = document.querySelector(".equals")
let display = document.querySelector("#display")

function appendNumber(newNumber) {
   let currentValue = document.querySelector("#display").value;
   document.querySelector("#display").value = currentValue + newNumber;
   if (newNumber === '0' && display.value === '0') return;
};
