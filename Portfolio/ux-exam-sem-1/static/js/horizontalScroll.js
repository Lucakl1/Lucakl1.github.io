import { getProducts } from "./products.js";
import { addToCart } from "./userCart.js";
import { showModal } from "./modal.js";

const products = await getProducts();

// foreach slider in the html
document.querySelectorAll(".horizontalProducktScroll").forEach(scrollSection => {
    let cardsToShow = products;
    
    // sort the products if a category exists
    const htmlCategory = scrollSection.getAttribute("scroll-category") || null;
    if (htmlCategory !== null) {
        const categories = htmlCategory.split(",").map(category => category.trim());
        cardsToShow = products.filter(product => categories.includes(product.category));
    }
    
    //append the products
    const cardTemplate = scrollSection.querySelector("template");

    const fragment = document.createDocumentFragment();
    cardsToShow.forEach(product => {
        const card = cardTemplate.content.cloneNode(true);
        card.querySelector("img").src = product.image;
        card.querySelector(".productName").innerText = product.title;
        card.querySelector(".productPrice").innerHTML = `${product.price}&#8364;`;
    
        card.querySelectorAll("a").forEach((aTag) => {
            const path = window.location.pathname;
            const isRoot = path === "/" || path.endsWith("/index.html");
            if (isRoot) {
                aTag.href = `pages/product.html?product=${product.id}&dynamicBreadcrume=${product.title}`;
            }
            else {
                aTag.href = `product.html?product=${product.id}&dynamicBreadcrume=${product.title}`;
            }
        });
        
        card.querySelector("button.addToCart").addEventListener("click", () => {
            addToCart(product);
            showModal("Product added", "Your product has been added to your cart", true);
        });
    
        fragment.append(card);
    });

    scrollSection.append(fragment);

    //Remove the draggable propertie from all img elements
    scrollSection.querySelectorAll("img").forEach(img => {
        img.draggable = false;
    });
    
    //Make the mouse able to scroll in the scroll
    let isDown = false;
    let mouseStartX;
    let sliderStartX;

    scrollSection.addEventListener("mousedown", e => {
        isDown = true;
        //Sets where the mouse and slider is at the start of dragging
        mouseStartX = e.pageX - scrollSection.offsetLeft;
        sliderStartX = scrollSection.scrollLeft;
        scrollSection.classList.add("dragging");
    });

    document.addEventListener("mouseup", () => {
        isDown = false;
        scrollSection.classList.remove("dragging");
    });

    scrollSection.addEventListener("mousemove", e => {
        if (!isDown) return;

        const dragDistanceX = (e.pageX - scrollSection.offsetLeft) - mouseStartX;
        scrollSection.scrollLeft = sliderStartX - dragDistanceX;
    });

    scrollSection.addEventListener("mouseleave", () => {
        isDown = false;
        scrollSection.classList.remove("dragging");
    });
});