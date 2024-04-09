let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup")
}
function closePopup(){
    popup.classList.remove("open-popup")
};


const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const form = document.getElementById('form');
const password_error = document.getElementById('password_error');
const password2_error = document.getElementById('password_error');

form.addEventListener('submit', (e) => {

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