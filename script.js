let display = document.querySelector("#display")

//appends numbers onto the display
function appendNumber(newNumber) {
   if (display.value === "0" && newNumber === "0") return; //prevents multiple leading zeros
   display.value += newNumber; //sets the value of the display to the number
};

//appends operations onto the display (+, -, /, *)
function appendOperation(input) {
      if (display.value === "" && (input === "*" || input === "/" || input === "+")) return; //prevents the equation from starting with an operate
      display.value += input;
};

// calculates the result
function calculate() {
   try{
      display.value = eval(display.value); //evaluates the value of the display

      //displays the hidden image 
      let image = document.getElementById("eureka");
        image.style.display = "block";

      //sets time limit on image so it is hidden again after 2 seconds
        setTimeout(() => {
         image.style.display = "none";
     }, 2000); 
   }
   //catches errors and displays it 
   catch(error){
      display.value = "Error";
   }
   
}

// Clears the display 
function clearDisplay() {
   display.value = ""; 
}