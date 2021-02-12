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
window.gameOver = false;
window.introDialogue = true;
window.introDialogue2 = false;
window.introDialogue3 = false;
window.foundTickets = false;

// //images
// const splashImg = new Image();
// splashImg.src = "./dist/images/splash.png";
const splashImg = new Image();
splashImg.src = "./dist/images/splash.png";
const splashImg2 = new Image();
splashImg2.src = "./dist/images/splash-2.png";
const splashImg3 = new Image();
splashImg3.src = "./dist/images/splash-3.png";
const passportImg = new Image();
passportImg.src = "./dist/images/passport.png";
const ticketImg = new Image();
ticketImg.src = "./dist/images/ticket.png";
const sunnyImg = new Image();
sunnyImg.src = "./dist/images/sprite.png";
const livingRoomImg = new Image();
livingRoomImg.src = "./dist/images/living-room.png";
const textbox = new Image();
textbox.src = "./dist/images/dialogue.png"

//draw images
function draw(img, dX, dY, dW, dH) {
    ctx.drawImage(img, dX, dY, dW, dH);
};
function drawSunny(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}
function drawDialogue(ctx) {
    ctx.drawImage(textbox, 240, 450, 800, 128)
};

function loadSplash(){
    if (window.gameSplashScreen === false) {;
        draw(splashImg, 0, 100, canvas.width, 487);
    }
}

function loadSplash2(){
    if (window.gameSplashScreen2 === false) {
        draw(splashImg2, 0, 100, canvas.width, 487);
    }
}
function loadSplash3(){
    if (window.gameSplashScreen3 === false) {
        draw(splashImg3, 0, 100, canvas.width, 487);
    }
}

//audio
const backgroundMusic = new Audio("./dist/audio/background.mp3")
backgroundMusic.play();


//keystroke eventlisteners
const keys = [];
document.addEventListener("keydown", (e) => {
    const key = e.keyCode 
    if ([37,38,39,40].includes(key)){
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
    } else if ([32].includes(key) && window.introDialogue2 === true ) {
        window.introDialogue2 = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        window.introDialogue3 = true;
        
         // clear intro dialogue-3 
    } else if ([32].includes(key) && window.introDialogue3 === true ) {
        window.introDialogue3 = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);


    } else if ([32].includes(key) && 290<sunny.x<310 && 490<sunny.y<510) {
        window.foundTickets = true;
    } else if ([32].includes(key) && window.foundTickets === true) {
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

function dialogue(){
    if (window.introDialogue && window.gameStart) {
        dialogueText = ["Hola! Cómo estás?", "Hey! how are you?"];
        drawDialogue(ctx);
        for (let i=0; i < dialogueText.length; i++) {
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
        dialogueText = ["Oye! I gotta get my passport, my plane tickets,", "and my wallet before the taxi gets here!"];
        drawDialogue(ctx);
        for (let i = 0; i < dialogueText.length; i++) {
            let lineHeight = (i + 1) * 30 + 472
            ctx.fillText(dialogueText[i], 420, lineHeight);
        }

        //found tickets
    } else if (window.foundTickets) {
        dialogueText = ["Orale, you found my flight tickets.","Muchas gracias!"];
        drawDialogue(ctx);
        for (let i = 0; i < dialogueText.length; i++) {
            let lineHeight = (i + 1) * 30 + 472
            ctx.fillText(dialogueText[i], 420, lineHeight);
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
        
        draw(passportImg, passport.x, passport.y, passport.width, passport.height);
        
        draw(ticketImg, ticket.x, ticket.y, ticket.width, ticket.height);
        
        dialogue();
        move();
        handleWalking();
    }

    
    requestAnimationFrame(animate);

}
animate()