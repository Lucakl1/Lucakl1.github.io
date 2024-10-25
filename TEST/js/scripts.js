// window.onload = function () {

//     var el = document.createElement("div");
//     el.innerHTML = "RABBIT TEST ";
//     var div = document.getElementById("headline");
//     insertAfter(div, el);

//     /* FUNCTIONS */

//     // Inserts newNode after referenceNode
//     function insertAfter(referenceNode, newNode) {
//         referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
//     }
// };

const search_icon = document.getElementById("search_icon");
const search = document.getElementById("search");
search_icon.style.transform = "rotate(0deg)"
search_icon.addEventListener("click", function () {
    if(search_icon.style.transform == "rotate(0deg)")
    {
        //icon
        search_icon.style.transform = "rotate(45deg)";

        //content
        search.style.left = "0";
        search.style.top = "0";
        search.style.opacity = "1";
    }
    else
    {
        //icon
        search_icon.style.transform = "rotate(0deg)";

        //content
        search.style.left = "100vw";
        search.style.top = "80vh";
        search.style.opacity = "0";
    }
})

//make burger menu smooth
const burger_icon = document.getElementById("burger_icon");
const burger_menu = document.getElementById("burger_menu");
const burger_socials = document.getElementById("burger_socials");
burger_icon.addEventListener("click", function () 
{
    burger_icon.classList.toggle("burger_icon");
    burger_menu.classList.toggle("shown");
    burger_socials.classList.toggle("shown");
});

//post data - could come from a backend - 
//cards will be loaded dynamicly
const post_data = [
    {id: 1, src: "assets/images/posts/Post thumbnail-1.png", title: "Wonderful Copenhagen 2021", published: "12/07/2021", content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},
    {id: 2, src: "assets/images/posts/Post thumbnail-2.png", title: "Wonderful Copenhagen 2021", published: "12/07/2021", content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},
    {id: 3, src: "assets/images/posts/Post thumbnail-3.png", title: "Wonderful Copenhagen 2021", published: "12/07/2021", content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},
    {id: 4, src: "assets/images/posts/Post thumbnail-4.png", title: "Wonderful Copenhagen 2021", published: "12/07/2021", content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},
]

//search
const search_results = document.getElementById("search_results");
const input = document.getElementById("search_input");
const search_template = document.getElementById("search_result_template");
input.addEventListener("input", () => {
    search_results.innerHTML = '';

    //go through elements and find matching
    post_data.forEach(element => {
        if(element.title.toLowerCase().includes(input.value.toLowerCase()))
        {
            const clon = search_template.content.cloneNode(true);

            clon.querySelector(".result").id = element.id;
            clon.querySelector(".search_title").innerHTML = element.title;
            clon.querySelector(".search_date").innerHTML = "Published " + element.title;

            clon.querySelector(".search_preview").innerHTML = element.content;
    
            search_results.append(clon);
        }
    });
})

const card_template = document.getElementById("card_template");
const cards_output = document.getElementById("cards");
window.onload = () => {
    post_data.forEach(element => {
        const clon = card_template.content.cloneNode(true);

        clon.querySelector(".card").id = element.id;
        clon.querySelector(".card_image").src = element.src;
        clon.querySelector("h2").innerHTML = element.title;    
        clon.querySelector(".date").innerHTML = "Published " + element.published;
        clon.querySelector(".card_content").innerHTML = element.content;

        cards_output.append(clon);
    });
}

const modal = document.getElementById("post_modal");
function openmodal(element) {
    const post_id = element.id;
    post_data.forEach(element => {
        if(element.id == post_id)
        {
            modal.querySelector(".modal_image").src = element.src;
            modal.querySelector("h1").innerHTML = element.title;
            modal.querySelector(".date").innerHTML = "Published " + element.published;
            modal.querySelector(".content").innerHTML = element.content;
        }
    });
    modal.classList.add("active");
}

function closemodal() {
    modal.classList.remove("active");
}