const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const form = document.getElementById('form');
const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');
const password2_error = document.getElementById('password_error');

form.addEventListener('submit', (e) => {
var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(name.value === '' || name.value == null) {
        e.preventDefault();
        name_error.innerHTML = "Full Name is required";
    } else {
        name_error.innerHTML = "";
    }

    if(!email.value.match(email_check)) {
        e.preventDefault();
        email_error.innerHTML = "Valid Email is required";
    } else {
        email_error.innerHTML = "";
    }

    if(password.value == '' || password.value == null) {
        e.preventDefault();
        password_error.innerHTML = "Password is required";
    } else if(password.value.length <= 6) {
        e.preventDefault();
        password_error.innerHTML = "Password must be more than 6 characters";
    } else if(password.value.length >= 20) {
        e.preventDefault();
        password_error.innerHTML = "Password must not be more than 20 characters";
    } else if(password.value === 'password') {
        e.preventDefault();
        password_error.innerHTML = "Password can not be password";
    } else {
        password_error.innerHTML = "";
    }
});


let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup")
}
function closePopup(){
    popup.classList.remove("open-popup")
}