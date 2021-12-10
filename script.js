const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.user.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "adminmrvapes12") {
        alert("Haz iniciado sesion con exito.");
        location.assign("/panel.html")
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})