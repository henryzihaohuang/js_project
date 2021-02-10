import { maria, handleWalkingFrame, drawMaria } from "./maria.js";
import { passport, drawPassport } from "./passport.js";
// import countdown from "./countdown.js";

//countdown timer
window.onload = () => {

    let minutes = 15;
    let seconds = 59;

    setInterval(() => {
        seconds = (seconds % 60) < 10 ? "0" + seconds : seconds;
        document.getElementById("countdown").innerHTML = minutes + " min : " + seconds + " sec before departure";
        seconds--;

        if (seconds === 0) {
            minutes--;
            seconds = 59;
        }
    }, 1000);
}


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const keys = [];

const ticket = {
    x: 300,
    y: 500,

    width: 80,
    height: 50,
};


//images
const passportImg = new Image();
passportImg.src = "./dist/images/passport.png";

const ticketImg = new Image();
ticketImg.src = "./dist/images/ticket.png";

const playerMaria = new Image();
playerMaria.src = "./dist/images/sprite.png";

//draw images

function drawTicket(img, dX, dY, dW, dH) {
    ctx.drawImage(img, dX, dY, dW, dH);
}

//keystroke eventlisteners
window.addEventListener("keydown", function (e) {
    const key = e.keyCode 

    keys[key] = true;
    maria.walking = true;
});

window.addEventListener("keyup", function (e) {
    const key = e.keyCode 

    delete keys[key];
    maria.walking = false;
});


function move() {

    if (keys[38] && maria.y > 100) {
        maria.y -= maria.speed;
        maria.frameY = 3;
        maria.walking = true;
    }
    if (keys[37] && maria.x > 0) {
        maria.x -= maria.speed;
        maria.frameY = 1;
        maria.walking = true;
    }
    if (keys[40] && maria.y < canvas.height - maria.height) {
        maria.y += maria.speed;
        maria.frameY = 0;
        maria.walking = true;
    }
    if (keys[39] && maria.x < canvas.width - maria.width) {
        maria.x += maria.speed;
        maria.frameY = 2;
        maria.walking = true;
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawMaria(playerMaria, maria.width * maria.frameX, maria.height * maria.frameY, maria.width, maria.height, maria.x, maria.y, maria.width, maria.height);

    drawPassport(passportImg, passport.x, passport.y, passport.width, passport.height);

    drawTicket(ticketImg, ticket.x, ticket.y, ticket.width, ticket.height);

    move();

    handleWalkingFrame();
    requestAnimationFrame(animate);
}

animate();



