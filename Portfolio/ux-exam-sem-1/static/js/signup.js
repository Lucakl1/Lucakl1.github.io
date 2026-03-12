import { USERS_BASE_URL, LOCAL_STORAGE_USER } from "./info.js";
import { showModal } from "./modal.js";

document.querySelector("#signupForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;

    const firstName = form.txtFirstName.value.trim();
    const email = form.txtEmail.value.trim();
    const password = form.txtPassword.value.trim();
    const repeatPassword = form.txtConfirmPassword.value.trim();

    if (password !== repeatPassword) {
        showModal("Validation error", "Both passwords must match.");
        return;
    }

    const newUser = {
        firstName: firstName,
        email: email,
        password: password
    };

    fetch(`${USERS_BASE_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
        delete data.password;
        localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(data));
        localStorage.setItem(`${LOCAL_STORAGE_USER}WelcomeMessage`, JSON.stringify(true));
        window.location.href = "../index.html";
    })
    .catch (error => {
        console.log(error); // eslint-disable-line
    });
});