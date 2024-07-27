const fullName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");
const fullName_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");
const password2_error = document.getElementById("password2_error");

let popup = document.getElementById("popup");
let popup2 = document.getElementById("popup2");
let blurry = document.getElementById("blur");
let popUpMessage1 = document.querySelector(".popup_message");
let popUpMessage2 = document.querySelector(".popup_message2");
let popUpImage = document.querySelector(".popup_image");
let btnVerify = document.querySelector(".btn-verify");
let messageDetails = document.querySelector('.create-details');

let addPopUpStyles = (popupName, blurName) => {
  popupName.classList.add("open-popup");
  blurName.classList.add("active");
};

let removePopUpStyles = (popupName, blurName) => {
  popupName.classList.remove("open-popup");
  blurName.classList.remove("active");
};
// popups show functions
function openLoginPopup() {

  setTimeout(() => {
    addPopUpStyles(popup, blurry);
    btnVerify.style.display = "none";
  }, 1000);
// sync not async
  setTimeout(()=> {
    messageDetails.innerHTML = "This page will automatically redirect";
  }, 3000)

  setTimeout(()=> {
    window.location.href = "/HTML/E_verify.html";
  }, 9000);
}
//verrify button
function closeLoginPopUp(){
removePopUpStyles(popup, blurry);
location.href = "HTML/E_verify.html";
}



//error popups for user alredy registered

function openErrorPopup(error) {
  popUpMessage1.innerHTML = `${error}!`;
  popUpMessage2.innerHTML = "Kindly Login to access your account!";
  setTimeout(() => {
    addPopUpStyles(popup2, blurry);
  }, 100);
}

function closeErrorPopUp(e) {
  e.preventDefault();
  removePopUpStyles(popup2, blurry);
}

//if creation button shows User Already Message
function showCreatedAccount(message) {
  if (message == "User Already Registered") {
    console.log(`response from endpoint: ${message}`);
    openErrorPopup(message);
  } else {
    setTimeout(() => {
      openLoginPopup();
    }, 100);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (fullName.value == "" || fullName == null) {
    e.preventDefault();
    fullName_error.innerHTML = "Full Name can't be empty";
    fullName.style.borderColor = "red";

  } else if (email.value == "") {
    e.preventDefault();
    email_error.innerHTML = "Email is required";
    email_error.style.borderColor = "red";
  } else if (password.value == "") {
    e.preventDefault();
    password_error.innerHTML = "Password is required";
    password.style.borderColor = "red";
  } else if (password2.value == " ") {
    e.preventDefault();
    password2_error.innerHTML = "Confirm password is required";
    password2.style.borderColor = "red";
  } else if (password2.value != password.value) {
    e.preventDefault();
    password2_error.innerHTML = "Passwords do not match!";
    password2.style.borderColor = "red";
  } else {
    fullName_error.innerHTML = " ";
    fullName.style.borderColor = "green";
    email_error.innerHTML = " ";
    email.style.borderColor = "green";
    password_error.innerHTML = " ";
    password.style.borderColor = "green";
    password2_error.innerHTML = " ";
    password2.style.borderColor = "green";
    let data = JSON.stringify({
      fullName: fullName.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://work-wise-server-side.onrender.com/users",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        showCreatedAccount(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
