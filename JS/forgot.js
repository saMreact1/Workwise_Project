let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup")
}
function closePopup(){
    popup.classList.remove("open-popup")
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