let form = document.getElementById("form");
let email = document.querySelector("#email");
let password = document.querySelector("#pass");
let formError = document.querySelector(".error");
// const loginButton = document.getElementById('submit');
const googleSignInBtn = document.getElementById("google-signIn-btn");
//google sign in
googleSignInBtn.addEventListener("click", () => {
  location.href =
    "https://work-wise-server-side.onrender.com/users/google/callback";
});

function inputElement(input, message) {
  if (input) {
    formError = input.nextElementSibling;
    formError.textContent = message;
    formError.style.display = "block";
  }
}

function showError(message) {
  if (message === "Incorrect Password") {
    inputElement(password, message);
    password.style.borderColor = "red";
    email.style.borderColor = "blue";
  }
  if (message === "") {
    inputElement(password, "Please enter your password.");
    password.style.borderColor = "red";
    email.style.borderColor = "blue";
  }

  if (message === "Incorrect Email") {
    inputElement(email, message);
    email.style.borderColor = "red";
    password.style.borderColor = "blue";
  }

  if (message == "User Login Successful") {
    setTimeout(() => {
      window.location.href = `/HTML/home.html`;
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
      showError(response.data.message);

      storeData(
        response.data.user.fullName,
        response.data.token,
        response.data.user.userId,
        response.data.user.email
      );
      // function showDetails(){
      //   console.log(response.data);
      //   console.log(response.data.user.fullName);
      // }
      // showDetails();
      //   console.log(response.data.message);
      // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});

// loginButton.addEventListener('click', () => {
//     console.log('Clicked');
// })

function storeData(username, token, userId, email) {
  localStorage.setItem("userName", username);
  localStorage.setItem("userToken", token);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userId", userId);
}
