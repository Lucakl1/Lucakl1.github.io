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
    root.style.setProperty("--standard_text","white");
}
function darkmode(){
    //colors
    root.style.setProperty("--color_baground","#000000");
    root.style.setProperty("--color_ontop","#11151d");

    //text colors
    root.style.setProperty("--text_color_hover","#a3a3a3");
    root.style.setProperty("--standard_text","black");
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