import { getCurrentUser, logUserOut } from "./userData.js";
const currentUser = await getCurrentUser();

// Is in root folder
const path = window.location.pathname;
const isRoot = path === "/" || path.endsWith("/index.html");

// Burger menu
const brugerMenu = document.getElementById("burgerMenu");
const brugerMenuIcon = brugerMenu?.querySelector("img");
let burgerMenuOpen = false;
brugerMenu?.addEventListener("click", () => {
    document.querySelector("nav > div").classList.toggle("show");
    burgerMenuOpen = !burgerMenuOpen;
    if (isRoot) {
        brugerMenuIcon.src = burgerMenuOpen ? "static/icons/close.svg" : "static/icons/burger.svg";
    }
    else {
        brugerMenuIcon.src = burgerMenuOpen ? "../static/icons/close.svg" : "../static/icons/burger.svg";
    }
});

// BreadCrum
const breadcrum = document.querySelector(".dynamicBreadcrume");
if (breadcrum) {
    const queryParams = new URLSearchParams(location.search);
    breadcrum.innerText = queryParams.get("dynamicBreadcrume");
};

// Mine profile - If logged in
if(currentUser) {
    const profileMenu = document.querySelector(".profileMenu > div");
    const profileTemplate = profileMenu.querySelector("template");

    const LogedInTemplate = profileTemplate.content.cloneNode(true);

    LogedInTemplate.querySelector(".userName").innerText = currentUser.firstName;
    LogedInTemplate.querySelector("button").addEventListener("click", () => {
        logUserOut();
        if (isRoot) {
            window.location.reload();
        }
        else {
            window.location.href = "../index.html";
        }
    });

    profileMenu.innerHTML = "";
    profileMenu.append(LogedInTemplate);

    document.querySelectorAll(".removeOnLogin").forEach(elm => {
        elm.classList.add("hidden");
    });
}

// Profile mini open / close
document.querySelector(".profileMenu button").addEventListener("click", (e) => {
    e.target.closest("li").classList.toggle("show");
});