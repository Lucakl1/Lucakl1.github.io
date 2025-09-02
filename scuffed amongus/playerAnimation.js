const youAnimation = function () {
    if(keypressed.left) {
        player.imgID.style.transform = "scaleX(-1)";
    }
    else if(keypressed.right) {
        player.imgID.style.transform = "scaleX(1)";
    }

    if(keypressed.up || keypressed.down || keypressed.left || keypressed.right) {
        walkAnimation()
    }
    else {
        player.imgID.src = "players/" + player.color + "/stand.png";
    }
}

function walkAnimation(){
    if(player.imgID.src.includes("players/Red/walk.gif")) {
        return;
    }

    player.imgID.src = "players/Red/walk.gif"
}

let oldPositions = {};
const playerAnimation = function (player_img, color, left, top) {

    const path = "players/" + color + "/";
    const currentID = player_img.id;

    if(oldPositions[currentID] == null) {
        oldPositions[currentID] = {left: left, top: top};
        return
    }

    const oldPos = oldPositions[currentID];

    if(oldPos.left > left) {
        player_img.style.transform = "scaleX(-1)";
    }
    else if(oldPos.left < left) {
        player_img.style.transform = "scaleX(1)";
    }

    //give a second to the animation
    setTimeout(() => {
        if (oldPos.left == left && oldPos.top == top) {
            player_img.src = path + "stand.png";
        }
        else {
            if (!player_img.src.includes("walk.gif")) player_img.src = path + "walk.gif";
        }

        oldPositions[currentID] = { left: left, top: top };
    }, 100);
};

