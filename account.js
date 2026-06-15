window.onload = function(){

    const box = document.querySelector(".login-box");

    const user = localStorage.getItem("bmwUserName");
    const email = localStorage.getItem("bmwUserEmail");
    const picture = localStorage.getItem("bmwUserPicture");

    if(user){

        box.innerHTML = `

        <img src="${picture}"
        style="width:120px;height:120px;border-radius:50%;margin-bottom:20px;">

        <h2>Welcome ${user}</h2>

        <p>${email}</p>

        <button class="login-btn" onclick="logoutUser()">
        🚪 Logout
        </button>

        `;
    }

}

function logoutUser(){

    localStorage.removeItem("bmwUserName");
    localStorage.removeItem("bmwUserEmail");
    localStorage.removeItem("bmwUserPicture");

    window.location.href = "index.html";

}