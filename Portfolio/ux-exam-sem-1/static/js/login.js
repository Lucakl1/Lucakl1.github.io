import { USERS_BASE_URL, LOCAL_STORAGE_USER } from "./info.js";
import { showModal } from "./modal.js";

document.querySelector("#loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    fetch(`${USERS_BASE_URL}/users`)
    .then(response => response.json())
    .then(data => {
        const email = e.target.txtEmail.value.trim();
        const password = e.target.txtPassword.value.trim();
        let userFound = false;

        data.forEach(user => {
            if (user.email === email && user.password === password) {
                delete user.password;
                localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user));
                showModal(`Welcome back ${user.firstName}`, "We hope you enjoy your stay");
                setTimeout(() => {
                    window.location.href = "../index.html";
                }, 2000);
                userFound = true;
            }
        });
        if (!userFound) {
            showModal("Invalid credentials", "Please try again");
        }
    })
    .catch(error => console.log(error)); // eslint-disable-line
});



