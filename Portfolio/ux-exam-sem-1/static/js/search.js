import { getProducts } from "./products.js";

const navSearch = document.getElementById("navSearch");
navSearch.querySelector("input").addEventListener("input", (e) => {
    if (e.target.value.length >= 3) {
        showProducts(e.target.value);
    }
    else {
        removeProducts();
    }
});

navSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const inputValue = e.target.querySelector("input").value;
    if (inputValue.length >= 1) {
        showProducts(inputValue);
    }
    else {
        removeProducts();
    }
});

const searchItemsUl = navSearch.querySelector("ul");
async function showProducts(searchTerm) {  
    const products = await getProducts();
    const itemsToShow = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const itemTemplate = navSearch.querySelector("template");
    const fragment = document.createDocumentFragment();
    itemsToShow.forEach(product => {
        const card = itemTemplate.content.cloneNode(true);
        card.querySelector("img").src = product.image;
        card.querySelector("img").alt = product.title;
        card.querySelector("h2 a").textContent = product.title;
        card.querySelector("p").textContent = product.description;

        card.querySelectorAll("a").forEach((aElement) => {
            const path = window.location.pathname;
            const isRoot = path === "/" || path.endsWith("/index.html");
            if (isRoot) {
                aElement.href = `pages/product.html?product=${product.id}&dynamicBreadcrume=${product.title}`;
            }
            else {
                aElement.href = `product.html?product=${product.id}&dynamicBreadcrume=${product.title}`;
            }
        });

        fragment.append(card);
    });

    searchItemsUl.innerHTML = "";
    searchItemsUl.append(fragment);
}

function removeProducts() {
    searchItemsUl.innerHTML = "";
}