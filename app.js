bestTimeText = document.getElementById("bestTimeText");
reactionTimeText = document.getElementById("reactionTimeText");
target = document.getElementById("target");

//makes the Target popup in a random spot on the screen after a random amount of time between 0 and 4s
function createTarget() {
    let popUpTime = 3000 * (Math.random());
    let marginLeft = 770 * (Math.random()) + "px";
    let marginTop = 470 * (Math.random()) + "px";

    setTimeout(function() {
    target.style.display = "block";
    target.style.marginLeft = marginLeft;
    target.style.marginTop = marginTop;
    target.style["transition-duration"] = "0.3s";
    target.style["-webkit-transform"] = "scale(1.0)";
    target.style["-ms-transform"] = "scale(1.0)";
    target.style["transform"] = "scale(1.0)";
    createdTime = Date.now();
    }, popUpTime);
}

createTarget();

//gets the reaction time, calls the create function to make the Target pop up again
target.onclick = function() {
    target.style.display = "none";
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime)/1000;
    document.getElementById("reactionTimeText").innerText = reactionTime;

        if (bestTimeText.innerText == "") {
            bestTimeText.innerText = reactionTime;
        }

        else if (bestTimeText.innerText > reactionTime) {
            bestTimeText.innerText = reactionTime;
        }

        document.getElementById('bestTimeSeconds').style.display = "inline";
        document.getElementById('reactionTimeSeconds').style.display = "inline";

    createTarget();
};
