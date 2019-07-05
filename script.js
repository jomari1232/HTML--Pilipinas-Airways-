var loadTime;

function load(){
    loadTime = setTimeout(login,2000);
}

function login(){
    window.location.href = "login.html";
}