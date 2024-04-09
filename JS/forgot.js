let popup = document.getElementById("popup");
let blur = document.getElementById("blur");

function openPopup(){
    popup.classList.add("open-popup");
    blur.classList.add("active");
}
function closePopup(){
    popup.classList.remove("open-popup");
    blur.classList.remove("active");
};

const email = document.getElementById('email');

form.addEventListener('submit', (e) => {

    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
    if(!email.value.match(email_check)) {
        e.preventDefault();
        email_error.innerHTML = "Valid Email is required";
    } else {
        email_error.innerHTML = "";
    }
})