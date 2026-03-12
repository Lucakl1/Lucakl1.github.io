import { LOCAL_STORAGE_CART } from "./info.js";
import { getCurrentUser } from "./userData.js";
const currentUser = await getCurrentUser();

const userid = currentUser ? currentUser.id : "userNotLoggedIn";

let currentCart = null;
export async function getCurrentCart() {
    if (currentCart) return currentCart;
    const cart = localStorage.getItem(LOCAL_STORAGE_CART + userid);
    if(!cart) {
        currentCart = [];
        return currentCart;
    }
    const userData = JSON.parse(cart);
    currentCart = userData;
    return userData;
}

export async function addToCart(product) {
    try {
        const tempList = await getCurrentCart();
        const ProductIndex = tempList.findIndex(item => item.id === product.id);

        // checks if already product in cart then +1 to amount else set amount: 1
        if (ProductIndex !== -1) {
            tempList[ProductIndex].amount += 1;
        }
        else {
            tempList.push({ ...product, amount: 1 });
        }

        localStorage.setItem(LOCAL_STORAGE_CART + userid, JSON.stringify(tempList));
        currentCart = tempList;
        
        return "succes";
    } 
    catch {
        return "failed";
    }
}

export async function removeFromCart(product) {
    try {
        const tempList = await getCurrentCart();
        const ProductIndex = tempList.findIndex(item => item.id === product.id);

        //checks if there is a product
        if (ProductIndex !== -1) {
            const currentAmount = tempList[ProductIndex].amount;
        
            //if amount is more than one -1
            if (currentAmount > 1) {
                tempList[ProductIndex].amount -= 1;
            } 
            else {
                tempList.splice(ProductIndex, 1);
            }
            
            localStorage.setItem(LOCAL_STORAGE_CART + userid, JSON.stringify(tempList));  
            currentCart = tempList;
        }
        return "succes";
    } 
    catch {
        return "failed";
    }
}

// removes all of the same products from cart (used when click on the trashcan icon)
export async function removeAllFromCart(product) {
    try {
        const tempList = await getCurrentCart();
        const newCart = tempList.filter(item => item.id !== product.id);

        localStorage.setItem(LOCAL_STORAGE_CART + userid, JSON.stringify(newCart));
        currentCart = newCart;

        return "succes";
    } 
    catch {
        return "failed";
    }
}

// remove everything from cart
export async function clearCart() {
    try {
        localStorage.removeItem(LOCAL_STORAGE_CART + userid);
        currentCart = null;
        return "succes";
    } 
    catch {
        return "failed";
    }
}

/*
    To get the cartItems use a js module and import getCurrentCart:

    import { getCurrentCart, addToCart, removeFromCart, removeAllFromCart, clearCart } from "./userCart.js";
    const currentCartItems = await getCurrentCart();
*/