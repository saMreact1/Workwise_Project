 const fullName = document.getElementById("name");
 const email = document.getElementById("email");
 const password = document.getElementById("password");
 const password2 = document.getElementById("password2");
 const form = document.getElementById("form");
 const fullName_error = document.getElementById("name_error");
 const email_error = document.getElementById("email_error");
 const password_error = document.getElementById("password_error");
 const password2_error = document.getElementById("password2_error");

form.addEventListener("submit", (e) => {
  var email_check =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (fullName.value === "" || fullName.value == null) {
    e.preventDefault();
    fullName_error.innerHTML = "Full Name is required";
  } else {
    fullName_error.innerHTML = "";
    fullName.style.borderColor = 'blue';
  }

  if (!email.value.match(email_check)) {
    e.preventDefault();
    email_error.innerHTML = "Valid Email is required";
    email.style.borderColor = 'red';
  } else {
    email_error.innerHTML = "";
    email.style.borderColor = 'blue';
  }

  if (password.value == "") {
    e.preventDefault();
    password_error.innerHTML = "Password is required";
    password.style.borderColor = 'red';
  } else if (password.value.length <= 6) {
    e.preventDefault();
    password_error.innerHTML = "Password must be more than 6 characters";
    password.style.borderColor = 'red';
  } else if (password.value.length >= 20) {
    e.preventDefault();
    password_error.innerHTML = "Password must not be more than 20 characters";
    password.style.borderColor = 'red';
  } else if (password.value === "password") {
    e.preventDefault();
    password_error.innerHTML = "Password can not be password";
    password.style.borderColor = 'red';
  
  }else {
    password_error.innerHTML = "";
    password2_error.innerHTML = "";
    password.style.borderColor = 'blue';
    password2.style.borderColor = 'blue';
  }

});

