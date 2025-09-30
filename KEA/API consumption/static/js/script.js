//Original
//const url = 'https://api.themoviedb.org/3/movie/now_playing?language=da-DK&page=1';

const witch_movies = document.getElementById("active_site");
if(witch_movies){
    // ----- language -----

    // Dansk DK - not very meny titles is in danish
    //const url = `https://api.themoviedb.org/3/movie/${witch_movies.getAttribute("data-value")}?language=da-DK&page=1`;
    
    // English US
    const url = `https://api.themoviedb.org/3/movie/${witch_movies.getAttribute("data-value")}?language=en-US&page=1`

    fetch(url, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2ZjYWYyMTc0NDIyMjZiN2YwMWI5YzRkZjYxMGVlNSIsIm5iZiI6MTc1ODgwMDYwNC41MjE5OTk4LCJzdWIiOiI2OGQ1MmFkYzY2ZjVlMzQ3N2JmMjBjNDgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9qC-cqV-_yZncdMcAAYXxmlkMGeLxk4SDPCOrORvZmk'
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

        const fragment = document.createDocumentFragment();

        movies.forEach(movie => {
            const movieTemplate = template.content.cloneNode(true);

            movieTemplate.querySelector("h2").innerText = movie.title;
            movieTemplate.querySelector("img").src = `https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`;
            movieTemplate.querySelector("img").alt = movie.title;
            movieTemplate.querySelector("p").innerText = movie.overview;
            movieTemplate.querySelector(".original-title").innerText = movie.original_title;
            movieTemplate.querySelector(".release-date").innerText = movie.release_date;
            fragment.append(movieTemplate);
        });
        document.getElementById("movies-list").append(fragment);
    }
}