import { addToCart } from "./userCart.js";
import { getProducts } from "./products.js";
import { showModal } from "./modal.js";

const products = await getProducts();

const categoryProducts = document.querySelector(".categoryProducts");
const articleTemplate = categoryProducts.querySelector("template");

const fragment = document.createDocumentFragment();
products.forEach(product => {
    const card = articleTemplate.content.cloneNode(true);
    card.querySelector("img").src = product.image;
    card.querySelector(".productName").innerText = product.title;
    card.querySelector(".productPrice").innerHTML = `${product.price}&#8364;`;

    card.querySelectorAll("a").forEach((aTag) => {
        aTag.href = `product.html?product=${product.id}&dynamicBreadcrume=${product.title}`;
    });
    
    card.querySelector("button.addToCart").addEventListener("click", () => {
        addToCart(product);
        showModal("Product added", "Your product has been added to your cart", true);
    });

    fragment.append(card);
});

categoryProducts.append(fragment);