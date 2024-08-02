const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const form = document.querySelector("#form");
const popupVerificationMessage = document.getElementById("popup-verification-message");
const errorMessage = document.getElementById("name_error");
const popupBox = document.getElementById("popup");
// const url = new URL(location.href);
// const userId = url.searchParams.get("id");
// const userName = url.searchParams.get("name");
// const userEmailParam = url.searchParams.get("email");

const heading = document.getElementById("heading");
const userEmail = document.getElementById("user_email");

//stored values
const createdUserName = localStorage.getItem("userName");
const createdUserToken = localStorage.getItem("userToken");
const createdUserEmail = localStorage.getItem("userEmail");
const createdUserOtpCode = localStorage.getItem("userOtpCode");
// console.log(createdUserName);
// console.log(createdUserEmail);
// console.log(createdUserOtpCode);

userEmail.innerText = createdUserEmail;
popupBox.style.display = "none";
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
        Authorization: `Bearer ${createdUserToken}`
        },
        data: data,
    };

    // Make Axios request to verify OTP
    axios.request(config)
        .then((response) => {
            // console.log(JSON.stringify(response.data.message));
            // console.log(response.data);
            verifyAccount(response.data.message);
            // Handle response data as needed (e.g., redirect user or display message)
        })
        .catch((error) => {
            console.log(error);
            // Handle error (e.g., display error message to user)
        });
});

function verifyAccount(message){
    if(message === "Email Verification Successful"){
        errorMessage.innerHTML = "";
        popupBox.style.display = "block";
        heading.style.display = "none";
        popupVerificationMessage.style.color = "green";
        popupBox.style.borderColor ="blue";
        popupVerificationMessage.innerText = message;
        setTimeout(()=>{
        location.href ="/HTML/home.html";
        }, 5000);
    }else{
        popupBox.style.display = "none";
        popupVerificationMessage.innerText = "";
        errorMessage.style.color = "red";
        errorMessage.innerHTML = message;
        let otpCode = "";
        inputs.forEach(input => {
            input.value += "";
            otpCode += input.value;
        });
    
        
        setTimeout(()=>{
            errorMessage.innerHTML = "";
        }, 5000);
    }
}