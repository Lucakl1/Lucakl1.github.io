import { getCurrentCart, addToCart, removeFromCart, removeAllFromCart } from "./userCart.js";
import { showModal } from "./modal.js";
const currentCartProducts = await getCurrentCart();

const cartSection = document.querySelector(".cartProducts");

if (currentCartProducts.length === 0) {
    cartSection.querySelector(".emptyCart").classList.remove("hidden");
    cartSection.querySelector(".checkout").classList.add("hidden");
} 
else {
    const template = cartSection.querySelector("template");
    const fragment = document.createDocumentFragment();

    currentCartProducts.forEach((product) => {
        const card = template.content.cloneNode(true);

        const img = card.querySelector("img");
        img.src = product.image;
        img.alt = product.title;

        const link = card.querySelector(".productLink");
        link.innerText = product.title;
        link.href = `product.html?product=${product.id}&dynamicBreadcrume=${product.title}`;

        const productprice = card.querySelector(".productPrice");
        productprice.innerHTML = `${product.price}&#8364;`;
        productprice.value = product.price;

        const productTotalPrice = card.querySelector(".productTotalPrice");
        function calcFullPrice(amount) {
            const fixedTotalPrice = (product.price * amount).toFixed(2);
            const totalPrice = product.price * amount;
    
            productTotalPrice.innerHTML = `${fixedTotalPrice}&#8364;`;
            productTotalPrice.value = totalPrice;
        }
        calcFullPrice(product.amount);

        const productAmount = card.querySelector(".productAmount");
        productAmount.innerText = product.amount;
        productAmount.value = product.amount;

        card.querySelector("button.increaseAmount").addEventListener("click", () => {
            addToCart(product);
            const currentAmount = productAmount.value;
            const newAmount = Number(currentAmount) + 1;
            productAmount.innerText = newAmount;
            productAmount.value = newAmount;
            calcFullPrice(newAmount);
        });
        
        card.querySelector("button.decreaseAmount").addEventListener("click", (e) => {
            removeFromCart(product);
            const currentAmount = productAmount.value;
            const newAmount = Number(currentAmount) - 1;
            
            if(newAmount <= 0) e.target.closest("li").remove();

            productAmount.innerText = newAmount;
            productAmount.value = newAmount;
            calcFullPrice(newAmount);
        });
        
        card.querySelector("button.removeAmount").addEventListener("click", (e) => {
            removeAllFromCart(product);
            e.target.closest("li").remove();
            showModal("Product remove", "Your product has been removed", true);
        });

        fragment.append(card);
    });

    cartSection.prepend(fragment);
}
