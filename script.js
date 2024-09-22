const switchs = document.getElementById("switchs");
const tandjul = document.getElementById("tandjul");

function close_popup(){
    switchs.style.transform = "rotate(0deg) translate(0px, 10px)";
    tandjul.style.transform = "translate(50%,50%) rotate(0deg)";

}
function open_popup(){
    switchs.style.transform = "rotate(-45deg) translate(-340px, 230px)";
    tandjul.style.transform = "translate(50%,50%) rotate(-90deg)";
}

var is_Shown = false;
const navbar = document.querySelectorAll(".toogle_navbar");
const navbar_icon = document.getElementById("navbar_icon");
window.onscroll = function() {
    if(is_Shown){
        is_Shown = false;
        navbar.forEach(element => {
            element.style.display = "none";
        });
    }
}

function toggle_navbar(){
    is_Shown = !is_Shown;
    if(is_Shown){
        navbar.forEach(element => {
            element.style.display = "flex";
        });
        navbar_icon.setAttribute("d","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");

    }
    else{
        navbar.forEach(element => {
            element.style.display = "none";
        });
        navbar_icon.setAttribute("d","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");
    }
}

const root = document.querySelector(":root");
const color_switcher = document.getElementById("color_switcher");

var current_theme = 0;
function switch_theme(){
    if(current_theme >= 3){
        current_theme = 1;
    }
    else{
        current_theme++;
    }

    //auto
    if(current_theme == 1){
        //makes it light mode if in middle of day
        const d = new Date();
        const hours = d.getHours();
        if(hours >= 10 && hours <= 18){
            lightmode()
        }
        else{
            darkmode()
        }

        color_switcher.innerText = "Auto";
    }
    //darkmode
    else if(current_theme == 2){
        darkmode()
        color_switcher.innerText = "Darkmode";
    }
    //Lightmode
    else{
        lightmode()
        color_switcher.innerText = "Lightmode";
    }
}
switch_theme()

function lightmode(){
    root.style.setProperty("--color_baground","#ffffff");
    root.style.setProperty("--color_ontop","#fbfaf8");

    //text colors
    root.style.setProperty("--text_color_hover","#5c5c5c");
    root.style.setProperty("--standard_text_color","black");
}
function darkmode(){
    //colors
    root.style.setProperty("--color_baground","#000000");
    root.style.setProperty("--color_ontop","#11151d");

    //text colors
    root.style.setProperty("--text_color_hover","#a3a3a3");
    root.style.setProperty("--standard_text_color","white");
}

const sprog_switcher = document.getElementById("sprog_switcher");
var er_dansk = true;
function switch_sprog(){
    er_dansk = !er_dansk;
    if(er_dansk){

        //mangler kode for at skriftre sprog

        sprog_switcher.innerText = "Dansk";
    }
    else{

        //mangler kode for at skriftre sprog

        sprog_switcher.innerText = "English";
    }
}

//Cubes
const cube_box = document.getElementById("cubes");
const width = window.innerWidth;

console.log(Math.round((width-30)/(100+20)))
for (let i = 1; i < Math.floor(((width-30)/(100+15))*3); i++) {
    cube_box.innerHTML += "<div></div>";
}

const distance = 115; // Tolerance distance
window.onmousemove = function calc_distance(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    for (let i = 0; i < cube_box.children.length; i++) {
        const element = cube_box.children[i].getBoundingClientRect();
        const Elm_x = Math.round(element.left + element.width / 2);
        const Elm_y = Math.round(element.top + element.height / 2);

        // Correct the distance condition logic
        if (Math.abs(Elm_x - mouseX) <= distance && Math.abs(Elm_y - mouseY) <= distance) {
            // If mouse is within the specified distance, shrink the element
            cube_box.children[i].classList.add("smaller");
        } else {
            // Otherwise, remove the "smaller" class
            cube_box.children[i].classList.remove("smaller");
        }
    }
}