import { sunny, handleWalkingFrame } from "./sunny.js";
import { passport } from "./passport.js";
import { ticket } from "./tickets.js";
import countdown from "./countdown.js";

countdown();

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const keys = [];

//images
const passportImg = new Image();
passportImg.src = "./dist/images/passport.png";

const ticketImg = new Image();
ticketImg.src = "./dist/images/ticket.png";

const sunnyImg = new Image();
sunnyImg.src = "./dist/images/sprite.png";

//draw images

function drawSunny(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function drawPassport(img, dX, dY, dW, dH) {
    ctx.drawImage(img, dX, dY, dW, dH);
};

function drawTicket(img, dX, dY, dW, dH) {
    ctx.drawImage(img, dX, dY, dW, dH);
}

//keystroke eventlisteners
window.addEventListener("keydown", function (e) {
    const key = e.keyCode 

    keys[key] = true;
    sunny.walking = true;
});

window.addEventListener("keyup", function (e) {
    const key = e.keyCode 

    delete keys[key];
    sunny.walking = false;
});


function move() {

    if (keys[38] && sunny.y > 100) {
        sunny.y -= sunny.speed;
        sunny.frameY = 3;
        sunny.walking = true;
    }
    if (keys[37] && sunny.x > 0) {
        sunny.x -= sunny.speed;
        sunny.frameY = 1;
        sunny.walking = true;
    }
    if (keys[40] && sunny.y < canvas.height - sunny.height) {
        sunny.y += sunny.speed;
        sunny.frameY = 0;
        sunny.walking = true;
    }
    if (keys[39] && sunny.x < canvas.width - sunny.width) {
        sunny.x += sunny.speed;
        sunny.frameY = 2;
        sunny.walking = true;
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawSunny(sunnyImg, sunny.width * sunny.frameX, sunny.height * sunny.frameY, sunny.width, sunny.height, sunny.x, sunny.y, sunny.width, sunny.height);

    drawPassport(passportImg, passport.x, passport.y, passport.width, passport.height);

    drawTicket(ticketImg, ticket.x, ticket.y, ticket.width, ticket.height);

    move();

    handleWalkingFrame();
    requestAnimationFrame(animate);
}

animate();



