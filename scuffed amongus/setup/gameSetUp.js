const playerFolder = document.getElementById("players");
const player = {imgID: null, color: null}

async function getPlayers() {
    const response = await fetch(`https://lxkskgajaswnfcobtyrk.supabase.co/rest/v1/playerPlacement`, {
        headers: {
            "apikey": supabaseKey,
            "Authorization": `Bearer ${supabaseData.access_token}`,
        }
    })
    const data = await response.json();

    data.forEach(playerElement => {
        let playerimg = document.createElement("img");

        playerimg.src = "players/" + playerElement.color + "/stand.png";
        playerimg.alt = "Player";
        if(playerElement.uuid == supabaseData.uuid){
            playerimg.classList = "YouPlayer";
            player.imgID = playerimg;
            player.color = playerElement.color;
        }
        playerimg.id = playerElement.uuid;


        playerFolder.appendChild(playerimg);
    });

    
}
getPlayers();