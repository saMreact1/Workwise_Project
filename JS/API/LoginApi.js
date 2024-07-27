let form = document.getElementById("form");
let email = document.querySelector("#email");
let password = document.querySelector("#pass");
let formError = document.querySelector(".error");
// const loginButton = document.getElementById('submit');

function inputElement(input, message) {
  if (input) {
    formError = input.nextElementSibling;
    formError.textContent = message;
    formError.style.display = "block";
  }
}

function showError(message, verified) {
  if (message === "Incorrect Password") {
    inputElement(password, message);
    password.style.borderColor = "red";
  }
  if (message === "") {
    inputElement(password, "Please enter your password.");
    password.style.borderColor = "red";
  }

  if (message === "Incorrect Email") {
    inputElement(email, message);
    email.style.borderColor = "red";
  }

  if (message == "User Login Successful") {
  setTimeout(() => {
    window.location.href = "/HTML/home.html";
  }, 100);
}
}

// 684168

// If input is valid, submit the form

const LoginApiCall = form.addEventListener("submit", async (e) => {
  e.preventDefault(); //to prevent page refresh

  let emailValue = email.value;
  let passwordValue = password.value;

  const config = {
    email: emailValue,
    password: passwordValue,
  };

  // aynsc _  await

  // console.log(passwordValue);
  const req = await axios
    .post(`https://work-wise-server-side.onrender.com/users/login`, config)
    .then(function (response) {
      
        showError(response.data.message, response.data.verified);
      
      //   console.log(response.data.message);
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});

// loginButton.addEventListener('click', () => {
//     console.log('Clicked');
// })

