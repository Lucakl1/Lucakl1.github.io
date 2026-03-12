import { STORE_BASE_URL } from "./info.js";

let product = null;
export async function getProducts() {
    if (product) return product; // already fetched, return existing array
    const response = await fetch(`${STORE_BASE_URL}/products`);
    const data = await response.json();
    product = data;
    // console.log(product);
    return product;
}

/*
To get the products use a js module and import getProducts:

import { getProducts } from "./products.js";
const products = await getProducts();

######
API response example
{
    "id": 1,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}
*/