import { getProducts } from "./products.js";
const products = await getProducts();
const featuedProduct = products[0];

const featuredSection = document.getElementById("featuredProduct");
if (featuredSection) {
    const img = featuredSection.querySelector("img");
    img.src = featuedProduct.image;
    img.alt = featuedProduct.title;

    featuredSection.querySelector(".productName").innerText = featuedProduct.title;
    featuredSection.querySelector(".productDescription").innerText = featuedProduct.description;
    featuredSection.querySelector(".productPrice").innerHTML = `${featuedProduct.price}&#8364;`;

    featuredSection.querySelectorAll("a").forEach((aTag) => {
        aTag.href = `pages/product.html?product=${featuedProduct.id}&dynamicBreadcrume=${featuedProduct.title}`;
    });
}