const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const form = document.querySelector("#form");

// Function to handle OTP input
inputs.forEach((input, index) => {
    input.addEventListener("keyup", (e) => {
        const currentInput = input;
        const nextInput = inputs[index + 1];
        const prevInput = inputs[index - 1];

        if (currentInput.value.length > 1) {
            currentInput.value = "";
            return;
        }

        if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }

        if (e.key === "Backspace" && index > 0) {
            currentInput.value = "";
            prevInput.focus();
        }

        // Enable verify button when all inputs are filled
        const allFilled = [...inputs].every(input => input.value.length === 1);
        if (allFilled) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
});

// Function to handle form submission (verify OTP)
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let token = localStorage.getItem('token'); // Retrieve token from localStorage

    // Collect OTP code from inputs
    let otpCode = "";
    inputs.forEach(input => {
        otpCode += input.value;
    });

    // Prepare data for POST request
    let data = JSON.stringify({
        otpCode: otpCode,
    });

    let config = {
        method: "post",
        url: "https://work-wise-server-side.onrender.com/users/verify",
        headers: {
            "Content-Type": "application/json",
            // Replace 'data.token' with your actual token logic
            Authorization: `Bearer ${token}`,
        },
        data: data,
    };

    // Make Axios request to verify OTP
    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            console.log(response.data.message);
            // Handle response data as needed (e.g., redirect user or display message)
        })
        .catch((error) => {
            console.log(error);
            // Handle error (e.g., display error message to user)
        });
});
