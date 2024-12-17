const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = ""; 
let operator = null;
let firstValue = "";
let secondValue = "";
let result = null;
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (button.id === "clear") {
            currentInput = "";
            operator = null;
            firstValue = "";
            secondValue = "";
            result = null;
            display.value = "";
        }
        
        else if (button.id === "backspace") {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        }
        
        else if (button.classList.contains("operator")) {
            if (currentInput !== "") {
                firstValue = currentInput;
                operator = value;
                currentInput = "";
            }
        }
        
        else if (button.id === "equal") {
            if (operator && firstValue !== "" && currentInput !== "") {
                secondValue = currentInput;
                result = calculateResult(parseFloat(firstValue), parseFloat(secondValue), operator);
                display.value = result;
                currentInput = result.toString();
                operator = null;
            }
        }
        
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
function calculateResult(a, b, op) {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b !== 0 ? a / b : "Error";
        default:
            return 0;
    }
}
