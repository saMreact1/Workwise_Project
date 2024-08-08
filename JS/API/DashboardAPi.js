//fetching username from backend
let profileBtn = document.querySelector(".profile-button");
let user_name = localStorage.getItem("userName");
profileBtn.innerHTML = user_name.charAt(0);