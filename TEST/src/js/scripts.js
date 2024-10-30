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
    {id: 1, src: "assets/images/posts/Post thumbnail-1.png", title: "TEST 1", published: "12/07/2021", content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},
    {id: 2, src: "assets/images/posts/Post thumbnail-2.png", title: "YEWS", published: "12/07/2021", content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},
    {id: 3, src: "assets/images/posts/Post thumbnail-3.png", title: "Wonderful Copenhagen 2021", published: "12/07/2021", content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},
    {id: 4, src: "assets/images/posts/Post thumbnail-4.png", title: "Wonderful Copenhagen 2021", published: "12/07/2021", content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},
    {id: 5, src: "assets/images/posts/Post thumbnail-4.png", title: "Wonderful Copenhagen 2021", published: "12/07/2021", content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},
    {id: 6, src: "assets/images/posts/Post thumbnail-4.png", title: "Wonderful Copenhagen 2021", published: "12/07/2021", content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},
    {id: 7, src: "assets/images/posts/Post thumbnail-4.png", title: "Wonderful Copenhagen 2021", published: "12/07/2021", content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},
    {id: 8, src: "assets/images/posts/Post thumbnail-4.png", title: "Wonderful Copenhagen 2021", published: "12/07/2021", content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},
    {id: 9, src: "assets/images/posts/Post thumbnail-4.png", title: "Wonderful Copenhagen 2021", published: "12/07/2021", content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},
    {id: 10, src: "assets/images/posts/Post thumbnail-4.png", title: "Wonderful Copenhagen 2021", published: "12/07/2021", content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},
    {id: 11, src: "assets/images/posts/Post thumbnail-4.png", title: "Wonderful Copenhagen 2021", published: "12/07/2021", content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},

]

const card_template = document.getElementById("card_template");
const cards_output = document.getElementById("cards");
const pages = document.getElementById("pages");
var amount_of_cards = 0;
                    //arounder til nærmeste 4 posts
const total_posts = (Math.round(post_data.length / 4) * 4)/4;
var current_page = 1;
window.onload = () => {
    loadmore(amount_of_cards);
 
    pages.innerText = "Page " + current_page + " of " + total_posts;
}

function previouspage() {
    amount_of_cards -= 4;
    current_page -= 1;
    
    if (current_page < 1) 
    {
        amount_of_cards = post_data.length - total_posts;
        current_page = total_posts;
    }

    pages.innerText = "Page " + current_page + " of " + total_posts;
    loadmore(amount_of_cards);

}
function nextpage() {
    amount_of_cards += 4;
    current_page += 1;

    if (current_page > total_posts) 
    {
        amount_of_cards = 0;
        current_page = 1;
    }

    pages.innerText = "Page " + current_page + " of " + total_posts;
    loadmore(amount_of_cards);

}

function loadmore(load_from) {
    cards_output.innerHTML = "";
    for (let i = 0; i < 4; i++) {
        const clon = card_template.content.cloneNode(true);

        clon.querySelector(".card").id = post_data[i + load_from].id;
        clon.querySelector(".card_image").src = post_data[i + load_from].src;
        clon.querySelector(".card_title").innerHTML = post_data[i + load_from].title;    
        clon.querySelector(".date").innerHTML = "Published " + post_data[i + load_from].published;
        clon.querySelector(".card_content").innerHTML = post_data[i + load_from].content;

        cards_output.append(clon);
    }
}


const overlay = document.getElementById("overlay");
const modal = document.getElementById("post_modal");
function openmodal(element) {
    const post_id = element.id;
    post_data.forEach(element => {
        if(element.id == post_id)
        {
            modal.querySelector(".modal_image").src = element.src;
            modal.querySelector(".title").innerHTML = element.title;
            modal.querySelector(".date").innerHTML = "Published " + element.published;
            modal.querySelector(".content").innerHTML = element.content;
        }
    });
    modal.classList.add("active");
    overlay.style.display = "block";
}

function closemodal() {
    modal.classList.remove("active");
    overlay.style.display = "none";
}

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
                clon.querySelector(".search_date").innerHTML = "Published " + element.published;

                clon.querySelector(".search_preview").innerHTML = element.content;
        
                search_results.append(clon);
            }
        });
    })

    const pc_search = document.getElementById("pc_search");
    pc_search.addEventListener("click", () => {
        search.classList.toggle("active");
    })

    const pc_search_input = document.getElementById("pc_search_input");
    pc_search_input.addEventListener("input", () => {

        //When typing is active
        if(!search.classList.contains("active"))
        {
            search.classList.add("active");
        }

        search_results.innerHTML = '';

        //go through elements and find matching
        post_data.forEach(element => {
            if(element.title.toLowerCase().includes(pc_search_input.value.toLowerCase()))
            {
                const clon = search_template.content.cloneNode(true);

                clon.querySelector(".result").id = element.id;
                clon.querySelector(".search_title").innerHTML = element.title;
                clon.querySelector(".search_date").innerHTML = "Published " + element.published;

                clon.querySelector(".search_preview").innerHTML = element.content;
        
                search_results.append(clon);
            }
        });
    })
//search