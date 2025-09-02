async function getYouPlayerPosition() {
    try {
        const response = await fetch(`https://lxkskgajaswnfcobtyrk.supabase.co/rest/v1/playerPlacement?uuid=eq.${supabaseData.uuid}`, {
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
        //add YouPlayer to logged in player
        setplayerPosition(data[0].left, data[0].top);
        updateYouPlayerPosition()
    } 
    catch (error) {
        console.error("An error occurred:", error);
    }
}

function setplayerPosition(left, top) {
    playerPosition.left = left;
    playerPosition.top = top;
}

async function updateYouPlayerPosition() {
    try {
        const response = await fetch(`https://lxkskgajaswnfcobtyrk.supabase.co/rest/v1/playerPlacement?uuid=eq.${supabaseData.uuid}`, {
            method: "PATCH",
            body: JSON.stringify({
                left: Math.round(playerPosition.left),
                top: Math.round(playerPosition.top)
            }),
            headers: {
                "apikey": supabaseKey,
                "Authorization": `Bearer ${supabaseData.access_token}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            console.error("Failed to update player position:", response.status, await response.text());
            return;
        }
    } 
    catch (error) {
        console.error("An error occurred:", error);
    }

    setTimeout(updateYouPlayerPosition, supabaseUpdateSpeed);
}

// Call the function once at the start
getYouPlayerPosition();