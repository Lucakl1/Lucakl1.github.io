const MusicItemTemplate = document.createElement('tr');
MusicItemTemplate.innerHTML =  
`<td class="autor"></td>
<td class="title"></td>
<td class="year"></td>
<td><img src="static/img/trash.svg" alt="" class="remove"></td>`

const musicTableBody = document.querySelector("tbody");
let currentId = 0;

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    currentId++;
    const thisID = currentId;

    const autor = event.target.querySelector("#autor").value;
    const title = event.target.querySelector("#title").value;
    const year = event.target.querySelector("#year").value;

    MusicItem = MusicItemTemplate.cloneNode(true);
    
    MusicItem.id = "CD" + thisID;
    MusicItem.querySelector(".autor").innerText = autor;
    MusicItem.querySelector(".title").innerText = title;
    MusicItem.querySelector(".year").innerText = year;

    MusicItem.querySelector(".remove").addEventListener("click", () => {
        musicTableBody.querySelector("#CD" + thisID).remove();
    })

    musicTableBody.appendChild(MusicItem);
});