let profileBtn = document.querySelector(".profile-button");
let user_name = localStorage.getItem("userName");
let signOut = document.querySelector(".sign-out");
profileBtn.innerHTML = user_name.charAt(0);

signOut.addEventListener('click', ()=> {
    localStorage.clear();
    setTimeout(()=> {
        window.location.href = "/HTML/login.html";
    }, 2000);
});