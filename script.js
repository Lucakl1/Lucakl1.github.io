//Navbar ----
document.getElementById("burger_bar").addEventListener("click", toggle_navbar);
const navbar_icon = document.getElementById("navbar_icon");
const navbar = document.getElementById("navbar");

var is_Shown = false;
function toggle_navbar(){
    is_Shown = !is_Shown;
    if(is_Shown){
        navbar_icon.setAttribute("d","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");
        navbar.style.right = "0px";
    }
    else{
        navbar_icon.setAttribute("d","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");
        navbar.style.right = "-300px";
    }
}
window.onscroll = function() {
    if(is_Shown){
        toggle_navbar()
    }
}
//Navbar ----

var old_obj = null;
document.querySelectorAll(".read_more").forEach(function(card) {
    card.addEventListener("click", function() {
        const current_card = this.parentElement;

        current_card.classList.toggle("big_card");
        current_card.children[2].classList.toggle("hidden");
        current_card.children[3].innerText  = "Close";

        if (old_obj == current_card){
            old_obj.children[3].innerText = "Read more";
            old_obj = null;
        } 
        else{
            if (old_obj){
                old_obj.classList.toggle("big_card");
                old_obj.children[2].classList.toggle("hidden");
                old_obj.children[3].innerText  = "Read more";
            }

            old_obj = current_card;
        }

    });
});