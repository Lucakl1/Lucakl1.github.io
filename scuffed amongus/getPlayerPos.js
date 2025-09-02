if (!supabaseData.access_token) {
    console.error("Access token is missing or invalid.");
} 
else {
    async function getPlayerPosition() {
        try {
            const response = await fetch(`https://lxkskgajaswnfcobtyrk.supabase.co/rest/v1/playerPlacement?uuid=neq.${supabaseData.uuid}`, {
                headers: {
                    "apikey": supabaseKey,
                    "Authorization": `Bearer ${supabaseData.access_token}`,
                }
            })
            if (!response.ok) {
                console.error("Failed to fetch data:", response.status, await response.text());
                return;
            }
            const data = await response.json();
            updateOtherPlayersPosition(data);
        } 
        catch (error) {
            console.error("An error occurred:", error);
        }
    }

    //press "å" to start
    function startFetchingPosition() {
        let isFetching = false;

        document.addEventListener("keydown", (event) => {
            if (event.key === "å") {
                isFetching = !isFetching;
                loop()
            }
        });

        function loop() {
            if (isFetching) {
                getPlayerPosition();
                setTimeout(loop, supabaseUpdateSpeed);
                console.log("Fetching player position...");
            }
        }

        loop();
    }

    startFetchingPosition();
}

function updateOtherPlayersPosition(data) {
    for (let i = 0; i < data.length; i++) {
        let currentPlayer = document.getElementById(data[i].uuid);

        let RelativePos = {
            left: data[i].left - Math.round(playerPosition.left),
            top: data[i].top - Math.round(playerPosition.top)
        }
    
        playerAnimation(currentPlayer, data[i].color, data[i].left, data[i].top);
        
        currentPlayer.style.left = RelativePos.left + "px";
        currentPlayer.style.top = RelativePos.top + "px"; 
    }
}

