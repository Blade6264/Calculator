const display = document.getElementById("display");

function appendToDisplay(input) {
    if (display.value === "Error") {
        clearDisplay();
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Using of eval() is dangerous
        display.value = eval(display.value);

        if (!isFinite(display.value)) {
            throw new Error;
        }
    }

    catch (error) {
        display.value = "Error";
    }
}