import { sunny, handleWalking } from "./scripts/sunny.js";
import { passport } from "./scripts/passport.js";
import { ticket } from "./scripts/tickets.js";
import countdown from "./scripts/countdown.js";

//canvas ctx
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


//window states
window.gameStart = false;
window.gameOver = false;
window.gameDialogue = false;

//images
const splashImg = new Image();
splashImg.src = "./dist/images/splash.png";
const passportImg = new Image();
passportImg.src = "./dist/images/passport.png";
const ticketImg = new Image();
ticketImg.src = "./dist/images/ticket.png";
const sunnyImg = new Image();
sunnyImg.src = "./dist/images/sprite.png";
const textbox = new Image();
textbox.src = "./dist/images/dialogue.png"

//draw images
function drawSplash(img, dX, dY, dW, dH) {
    ctx.drawImage(img, dX, dY, dW, dH);
};
function drawSunny(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}
function drawPassport(img, dX, dY, dW, dH) {
    ctx.drawImage(img, dX, dY, dW, dH);
};
function drawTicket(img, dX, dY, dW, dH) {
    ctx.drawImage(img, dX, dY, dW, dH);
}
function drawDialogue(ctx) {
    ctx.drawImage(textbox, 240, 450, 800, 128)
};

function loadSplash(){
    if (window.gameStart === false) {;
        drawSplash(splashImg, canvas.width/8, 50, 900, 700);
    }
}

//keystroke eventlisteners
const keys = [];
document.addEventListener("keydown", (e) => {
    const key = e.keyCode 
    if ([37,38,39,40].includes(key)){
        keys[key] = true;
        sunny.walking = true;

    } else if ([32].includes(key) && window.gameStart){
        window.gameDialogue === true ? window.gameDialogue = false : window.gameDialogue = true;

    } else if ([32].includes(key) && !window.gameStart) {
        window.gameStart = true;
        countdown();
    }
});
document.addEventListener("keyup", (e) => {
    const key = e.keyCode 
    if ([37, 38, 39, 40].includes(key)) {
        delete keys[key];
    }
});

// move Sunny
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

//game dialogue
let dialogueText;
function pickUpItem(){
    dialogueText = "Hey! This is my plane ticket!";
    if (window.gameDialogue) {
        drawDialogue(ctx);
        ctx.fillText(dialogueText, 420, 510)
    }
}

//animate game
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    loadSplash();
    if (window.gameStart) {
        drawSunny(sunnyImg, (sunny.frameX / sunny.width), (sunny.frameY * sunny.height), sunny.width, sunny.height, sunny.x, sunny.y, sunny.width, sunny.height);

        drawPassport(passportImg, passport.x, passport.y, passport.width, passport.height);

        drawTicket(ticketImg, ticket.x, ticket.y, ticket.width, ticket.height);

        move();
        pickUpItem();
        handleWalking();
    }

    
    requestAnimationFrame(animate);

}
animate();