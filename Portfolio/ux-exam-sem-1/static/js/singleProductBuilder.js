import { addToCart } from "./userCart.js";
import { getProducts } from "./products.js";
import { showModal } from "./modal.js";
const products = await getProducts();

const queryParams = new URLSearchParams(location.search);
const productNumber = Number(queryParams.get("product"));

if (productNumber) {
    const product = products.find((product) => product.id === productNumber);
    const singleProduct = document.querySelector(".singleProduct");

    const img = singleProduct.querySelector("img");
    img.src = product.image;
    img.alt = product.title;

    singleProduct.querySelector(".productName").innerText = product.title;

    const price = singleProduct.querySelector(".productPrice");
    price.innerHTML = `${product.price}&#8364;`;
    price.value = product.price;
    
    const ratingRate = singleProduct.querySelector(".productRating");
    ratingRate.innerText = product.rating.rate;
    ratingRate.value = product.rating.rate;
    
    const ratingCount = singleProduct.querySelector(".productRatingCount");
    ratingCount.innerText = product.rating.count;
    ratingCount.value = product.rating.count;

    singleProduct.querySelector(".productDescription").innerText = product.description;

    singleProduct.querySelector("button.addToCart").addEventListener("click", () => {
        addToCart(product);
        showModal("Product added", "Your product has been added to your cart", true);
    });

    // BreadCrum
    const breadcrum = document.querySelector(".productCategory");
    breadcrum.innerText = product.category;
    breadcrum.href = `shopCategory.html?category=${product.category}&dynamicBreadcrume=${product.category}`;
}
else {
    window.location.href = "../index.html";
}