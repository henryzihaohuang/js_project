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
window.gameSplashScreen = false;
window.gameSplashScreen2 = true;
window.gameSplashScreen3 = true;

window.introDialogue = true;
window.introDialogue2 = false;
window.introDialogue3 = false;

window.foundTickets = false;
window.foundTickets2 = false;
window.foundTickets3 = false;
window.inventory = [];


window.gameOver = false;

// //images
const splashImg = new Image();
splashImg.src = "https://raw.githubusercontent.com/henryzihaohuang/lost_in_translation/main/dist/images/splash.png";
const splashImg2 = new Image();
splashImg2.src = "../dist/images/splash-2.png";
const splashImg3 = new Image();
splashImg3.src = "../dist/images/splash-3.png";
const passportImg = new Image();
passportImg.src = "../dist/images/passport.png";
const ticketImg = new Image();
ticketImg.src = "../dist/images/ticket.png";
const sunnyImg = new Image();
sunnyImg.src = "../dist/images/sprite.png";
const livingRoomImg = new Image();
livingRoomImg.src = "../dist/images/living-room.png";
const textbox = new Image();
textbox.src = "../dist/images/dialogue.png"

//draw image fx
function draw(img, dX, dY, dW, dH) {
    ctx.drawImage(img, dX, dY, dW, dH);
};
function drawSunny(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}
function drawDialogue(ctx) {
    ctx.drawImage(textbox, 240, 450, 800, 128)
};
function drawDialogueResponse(ctx) {
    ctx.drawImage(textbox, 240, 380, 800, 200)
};

function loadSplash() {
    if (window.gameSplashScreen === false) {
        ;
        draw(splashImg, 0, 100, canvas.width, 487);
    }
}
function loadSplash2() {
    if (window.gameSplashScreen2 === false) {
        draw(splashImg2, 0, 100, canvas.width, 487);
    }
}
function loadSplash3() {
    if (window.gameSplashScreen3 === false) {
        draw(splashImg3, 0, 100, canvas.width, 487);
    }
}

//audio
const backgroundMusic = new Audio("./dist/audio/background.mp3")
const playBtn = document.getElementById("backgroundMusic")
playBtn.addEventListener("click", (e) => {
    if (backgroundMusic.paused){
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
});

//keystroke eventlisteners
const keys = [];
document.addEventListener("keydown", (e) => {
    const key = e.keyCode
    if ([37, 38, 39, 40].includes(key)) {
        keys[key] = true;
        sunny.walking = true;

        // load first splash
    } else if ([32].includes(key) && !window.gameSplashScreen) {
        window.gameSplashScreen = true;
        window.gameSplashScreen2 = false;
        loadSplash2();

        // load second splash
    } else if ([32].includes(key) && !window.gameSplashScreen2) {
        window.gameSplashScreen2 = true;
        window.gameSplashScreen3 = false;
        loadSplash3();

        // load third  splash
    } else if ([32].includes(key) && !window.gameSplashScreen3) {
        window.gameSplashScreen3 = true;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        window.gameStart = true;
        countdown();

        // load intro dialogue-2 after initial intro dialogue
    } else if ([32].includes(key) && window.gameStart && window.introDialogue === true) {
        window.introDialogue = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        window.introDialogue2 = true;

        // load intro dialogue-3 after splash screens
    } else if ([32].includes(key) && window.introDialogue2 === true) {
        window.introDialogue2 = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        window.introDialogue3 = true;

        // clear intro dialogue-3 
    } else if ([32].includes(key) && window.introDialogue3 === true) {
        window.introDialogue3 = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //found tickets dialogue
    } else if ([32].includes(key) && 298 < sunny.x < 302 && 498 < sunny.y < 501 && window.foundTickets === false && !window.inventory.includes("tickets")) {
        window.foundTickets = true;

        //clear foundTickets dialogue
    } else if ([32].includes(key) && window.foundTickets === true && window.foundTickets2 === false && window.inventory.includes("tickets")) {
        window.foundTickets = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        window.foundTickets2 = true;

    } else if ([32].includes(key) && window.foundTickets2 === true && window.foundTickets3 === false && window.inventory.includes("tickets")) {
        window.foundTickets2 = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        window.foundTickets3 = true;
    } else if ([32].includes(key) && window.foundTickets3 === true) {
        window.foundTickets3 = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    if (keys[38] && sunny.y > 300) {
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
ctx.font = "14pt Courier";

function dialogue() {
    if (window.introDialogue && window.gameStart) {
        dialogueText = ["Hola! Cómo estás?", "Hey! how are you?"];
        drawDialogue(ctx);
        for (let i = 0; i < dialogueText.length; i++) {
            let lineHeight = (i + 1) * 30 + 472
            ctx.fillText(dialogueText[i], 420, lineHeight);
        }

    } else if (!window.introDialogue && window.introDialogue2) {
        dialogueText = ["My name is Sunny, un gusto!", "A pleasure!"];
        drawDialogue(ctx);

        for (let i = 0; i < dialogueText.length; i++) {

            let lineHeight = (i + 1) * 30 + 472
            ctx.fillText(dialogueText[i], 420, lineHeight);
        }

    } else if (!window.introDialogue2 && window.introDialogue3) {
        dialogueText = ["¡Oye! I gotta get my passport, my plane tickets,", "and my wallet before the taxi gets here!"];
        drawDialogue(ctx);
        for (let i = 0; i < dialogueText.length; i++) {
            let lineHeight = (i + 1) * 30 + 472
            ctx.fillText(dialogueText[i], 420, lineHeight);
        }

        //found tickets
    } else if (window.foundTickets) {
        dialogueText = ["¡Ándale! You found my flight tickets.","¡Muchas gracias!", ];
        drawDialogue(ctx);
        window.inventory.push("tickets");

        for (let i = 0; i < dialogueText.length; i++) {
            let lineHeight = (i + 1) * 30 + 472
            ctx.fillText(dialogueText[i], 420, lineHeight);
        }

        //found Tickets 2
    } else if (window.foundTickets2) {
        dialogueText = ["How do you say, \"Here is my passport.\"", "in Spanish?"];
        drawDialogue(ctx);
        for (let i = 0; i < dialogueText.length; i++) {
            let lineHeight = (i + 1) * 30 + 472
            ctx.fillText(dialogueText[i], 420, lineHeight);
        }
        //
    } else if (window.foundTickets3) {
        dialogueText = ["Acá está mi pasaporte.", "¿Dónde está mi pasaporte?", "Necesito mi pasaporte.", "Este! ¡¡¡¡Pasaporte!!!! HEREEEEEE TAKE IT!"];
        drawDialogueResponse(ctx);
        for (let i = 0; i < dialogueText.length; i++) {
            let lineHeight = (i + 1) * 30 + 409
            ctx.fillText(dialogueText[i], 370, lineHeight);
        }
    }
}

//animate game
function animate() {
    loadSplash();
    if (window.gameStart) {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw(livingRoomImg, 0, 100, canvas.width, 487);
        drawSunny(sunnyImg, (sunny.frameX / sunny.width), (sunny.frameY * sunny.height), sunny.width, sunny.height, sunny.x, sunny.y, sunny.width, sunny.height);

        if (!(window.inventory).includes("tickets")) {
            draw(ticketImg, ticket.x, ticket.y, ticket.width, ticket.height);
        } else {
            draw(ticketImg, 1168, 300, ticket.width, ticket.height);
        }

        draw(passportImg, passport.x, passport.y, passport.width, passport.height);


        dialogue();
        move();
        handleWalking();
    }


    requestAnimationFrame(animate);

}
animate()