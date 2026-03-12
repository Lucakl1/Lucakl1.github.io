import { getCurrentCart, clearCart } from "./userCart.js";
import { showModal } from "./modal.js";
const currentCheckoutProducts = await getCurrentCart();

document.querySelector(".checkout").addEventListener("click", () => {
    document.querySelector(".cartProducts").classList.add("hidden");
    document.querySelector(".checkoutProducts").classList.remove("hidden");

    if (currentCheckoutProducts.length !== 0) {
        let totalPrice = 0;
        const orderSummary = document.querySelector(".orderSummary");
        const template = orderSummary.querySelector("template");

        const fragment = document.createDocumentFragment();

        currentCheckoutProducts.forEach((product) => {
            const card = template.content.cloneNode(true);

            const img = card.querySelector("img");
            img.src = product.image;
            img.alt = product.title;
            
            card.querySelector(".productName").innerText = product.title;
            
            const productPrice = card.querySelector(".productPrice");
            productPrice.innerHTML = `${product.price}&#8364;`;
            productPrice.value = product.price;
            
            const productAmount = card.querySelector(".productAmount");
            productAmount.innerText = product.amount;
            productAmount.value = product.amount;
            
            const productTotalPriceElm = card.querySelector(".productTotalPrice");
            const productTotalPrice = product.amount * product.price;
            productTotalPriceElm.innerHTML = `${productTotalPrice}&#8364;`;
            productTotalPriceElm.value = productTotalPrice;
            totalPrice += productTotalPrice;

            fragment.append(card);
        });
        orderSummary.querySelector("ul").prepend(fragment);

        totalPrice = totalPrice.toFixed(2);
        const allProductTotalPrice = document.querySelector(".allProductTotalPrice");
        allProductTotalPrice.innerHTML = `${totalPrice}&#8364;`;
        allProductTotalPrice.value = totalPrice;
    };
}); 

// Finish order
const checkoutForm = document.querySelector(".checkoutForm");
checkoutForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    await clearCart();
    showModal(
        "Thank you for your purchase!",
        "We have recived your order and we will start preparing your order for shipment."
    );
});

const billingFieldset = checkoutForm.querySelector(".billing");
const addBillingAddress = checkoutForm.querySelector("#addBillingAddress");
addBillingAddress.addEventListener("change", () => {
    billingFieldset.hidden = !addBillingAddress.checked;
});