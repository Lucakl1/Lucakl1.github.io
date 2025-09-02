const playerPosition = {
    left: 0,
    top: 0
}
const keypressed = {
    left: false,
    right: false,
    up: false,
    down: false
}

const mapForeMovement = document.getElementById("moveableMap");

const speed = 1;
//in miliseconds
const supabaseUpdateSpeed = 50;

// Keyboard
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "d") keypressed.right = true;
    if (event.key.toLowerCase() === "a") keypressed.left = true;
    if (event.key.toLowerCase() === "w") keypressed.up = true;
    if (event.key.toLowerCase() === "s") keypressed.down = true;
});

document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "d") keypressed.right = false;
    if (event.key.toLowerCase() === "a") keypressed.left = false;
    if (event.key.toLowerCase() === "w") keypressed.up = false;
    if (event.key.toLowerCase() === "s") keypressed.down = false;
});


let lastTimestamp = performance.now();

function updatePlayerPosition() {
    const currentTimestamp = performance.now();
    const deltaTime = (currentTimestamp - lastTimestamp) / 1000;
    lastTimestamp = currentTimestamp;

    const DeltaTimeSpeed = speed * deltaTime * 250;

    if (keypressed.down) {
        playerPosition.top += DeltaTimeSpeed;
    }
    if (keypressed.up) {
        playerPosition.top -= DeltaTimeSpeed;
    }
    if (keypressed.right) {
        playerPosition.left += DeltaTimeSpeed;
    }
    if (keypressed.left) {
        playerPosition.left -= DeltaTimeSpeed;
    }

    mapForeMovement.style.left = Math.round(-playerPosition.left)  + "px";
    mapForeMovement.style.top = Math.round(-playerPosition.top) + "px";
    youAnimation();
}

// Game loop to ensure smooth movement
function gameLoop() {
    updatePlayerPosition();
    requestAnimationFrame(gameLoop);
}

function startAfterSetup() {
    if (player.imgID == null) {
        setTimeout(() => {
            startAfterSetup()
        }, 500);
    } 
    else {
        console.log("setUp has run");
        gameLoop();
    }
}
startAfterSetup()