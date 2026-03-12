import { LOCAL_STORAGE_USER } from "./info.js";
import { showModal } from "./modal.js";

const makeAWelcomeMessage = localStorage.getItem(`${LOCAL_STORAGE_USER}WelcomeMessage`);
localStorage.removeItem(`${LOCAL_STORAGE_USER}WelcomeMessage`);

if (makeAWelcomeMessage) {
    showModal("Welcome to trendsetting", "We hope you enjoy your stay!");
}