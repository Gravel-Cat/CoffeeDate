const stage = document.getElementById('stage');
const coffee = document.getElementById('coffee');

let posX = 200, posY = 300;
let dirX = 1;
let speed = 1.4;
let step = 0;
let moving = true;
let waitTimer = 0;

function randomWaitTime() {
    // 1–3 másodperc szünetek
    return 1000 + Math.random() * 2000;
}

function randomDirection() {
    // véletlenszerűen balra vagy jobbra indul
    dirX = Math.random() < 0.3 ? -1 : 1;
    coffee.style.transform = `scaleX(${dirX})`;
}

function animate(timestamp) {
    const stageW = stage.clientWidth;
    const stageH = stage.clientHeight;
    const coffeeW = coffee.clientWidth;
    const coffeeH = coffee.clientHeight;

    if (moving) {
        step += 0.1;
        const verticalBob = Math.sin(step * 4) * 4; // lépegetés
        posX += dirX * speed;

        // falak ellenőrzése
        if (posX <= 50) {
            dirX = 1;
            coffee.style.transform = "scaleX(1)";
        } else if (posX >= stageW - coffeeW - 50) {
            dirX = -1;
            coffee.style.transform = "scaleX(-1)";
        }

        // kávé magassága (padlóhoz igazítva)
        posY = stageH - coffeeH - 50 + verticalBob;

        coffee.style.left = posX + "px";
        coffee.style.top = posY + "px";

        // néha megáll pihenni
        if (Math.random() < 0.002) {
            moving = false;
            waitTimer = performance.now() + randomWaitTime();
        }

    } else {
        // ha várakozik, egy helyben marad
        if (timestamp > waitTimer) {
        moving = true;
        randomDirection();
        }
    }

    requestAnimationFrame(animate);
}

// indulás
coffee.style.left = posX + "px";
coffee.style.top = posY + "px";
animate();