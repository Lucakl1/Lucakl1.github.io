import {baseURL, baseimgURL} from "./globalVariables.js";

const buttons = document.querySelectorAll("#movie_list_option button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        append_movies(button);
    });
    if(button.classList.contains("active_site")){
        append_movies(button);
    }
});
function append_movies(button){
    if(button){
        //fore nav
        document.querySelector("#movie_list_option .active_site").classList.remove("active_site");
        button.classList.add("active_site");
        
        const movie_list = document.getElementById("movies-list");
        const witch_site = button.getAttribute("data-value")
        
        //remove prev_veiw
        movie_list.querySelectorAll("section").forEach(section => {
            if(!section.classList.contains("hidden")){
                section.classList.add("hidden");
            }
        });
        //if we allready added it just take it from before and dont call the api
        const saved_section = movie_list.querySelector(`.${witch_site}`);
        if(saved_section){
            saved_section.classList.remove("hidden");
            return;
        }
        
        const url = `${baseURL}movie/${witch_site}?language=en-US&page=1`
        fetch(url, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + apiKey
                }
            }
        )
        .then(res => res.json())
        .then((res) => {
            //console.log(res);
            if(res.results){
                append_movies(res.results);
            }
        })
        .catch(err => {
            console.error(err);
        });
    
        function append_movies(movies){
            //console.log(movies)
            const template = document.getElementById("movie_template");
    
            const section = document.createElement("section");
            section.classList.add(witch_site);
    
            movies.forEach(movie => {
                const movieTemplate = template.content.cloneNode(true);
    
                movieTemplate.querySelector("h2").innerText = movie.title;
                movieTemplate.querySelector("img").src = `${baseimgURL}w220_and_h330_face${movie.poster_path}`;
                movieTemplate.querySelector("img").alt = movie.title;
                movieTemplate.querySelector("p").innerText = movie.overview;
                movieTemplate.querySelector(".original-title").innerText = movie.original_title;
                movieTemplate.querySelector(".release-date").innerText = movie.release_date;
                section.append(movieTemplate);
            });
            movie_list.append(section);
        }
    }
}