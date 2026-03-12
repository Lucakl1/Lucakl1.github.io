import { LOCAL_STORAGE_USER } from "./info.js";

let currentUser = null;
export async function getCurrentUser() {
    if (currentUser) return currentUser;
    const user = localStorage.getItem(LOCAL_STORAGE_USER);
    if(!user) {
        return null;
    }
    const userData = JSON.parse(user);
    currentUser = userData;
    return userData;
}

export function logUserOut() {
    localStorage.removeItem(LOCAL_STORAGE_USER);
    location.reload();
}

/*
    To get the users use a js module and import getCurrentUser:

    import { getCurrentUser, logUserOut } from "./userData.js";
    const currentUser = await getCurrentUser();
*/