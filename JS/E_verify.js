const inputs = document.querySelectorAll("input"),
    button = document.querySelector("button");

// iterate over all inputs
inputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
        // This code gets the current input element and stores it in currentInput variable
        // This code gets the next sibling element of the current input element and stores it in the nextInput variable
        // This code gets the previous sibling element of the current input element and stores it in the prevInput variable 
        const currentInput = input,
        nextInput = input.nextElementSibling,
        prevInput = input.previousElementSibling;

        //if the value has more than one charcter then clear it
        if(currentInput.value.length > 1){
            currentInput.value = "";
            return;
        }
        // if the next input is disabled and the current value is not empty
        // enable the next input and focus on it
        if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== ""){
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }

        //if the backspace key is pressed
        if(e.key === "Backspace"){
            // iterate over all inputs again
            inputs.forEach((input, index2) => {
                if(index1 <= index2 && prevInput) {
                    input.setAttribute("disabled", true);
                    currentInput.value = "";
                    prevInput.focus();
                }
            })
        }

        if(!inputs[0].disabled){
            button.classList.add("active");
            return;
        }
        button.classList.remove("active");
    });
});