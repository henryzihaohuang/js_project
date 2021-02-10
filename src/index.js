const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const keys = [];

const maria = {
    x: 200,
    y: 500,

    width: 32,
    height: 48,

    //which index of sprite frame to animate
    frameX: 0,
    frameY: 0,

    speed: 3,
    walking: false
};

const passport = {
    x: 400,
    y: 500,

    width: 73,
    height: 69,
};

const ticket = {
    x: 300,
    y: 500,

    width: 80,
    height: 50,
};


const passportImg = new Image();
passportImg.src = "./dist/images/passport.png";

const ticketImg = new Image();
ticketImg.src = "./dist/images/ticket.png";

const background = new Image();
// background.src = "./dist/images/background.png";


const playerMaria = new Image();
playerMaria.src = "./dist/images/sprite.png";

function drawPassport(img, dX, dY, dW, dH) {
    ctx.drawImage(img, dX, dY, dW, dH);
}
function drawTicket(img, dX, dY, dW, dH) {
    ctx.drawImage(img, dX, dY, dW, dH);
}

function drawMaria(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}


window.addEventListener("keydown", function (e) {
    const key = e.keyCode || e.key; //keyCode deprecated

    keys[key] = true;
    maria.walking = true;
});

window.addEventListener("keyup", function (e) {
    const key = e.keyCode || e.key; //keyCode deprecated

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


function handleWalkingFrame() {
    if (maria.frameX < 3 && maria.walking) maria.frameX++;
    else maria.frameX = 0;
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    drawMaria(playerMaria, maria.width * maria.frameX, maria.height * maria.frameY, maria.width, maria.height, maria.x, maria.y, maria.width, maria.height);
    drawPassport(passportImg, passport.x, passport.y, passport.width, passport.height);

    drawTicket(ticketImg, ticket.x, ticket.y, ticket.width, ticket.height);

    move();

    handleWalkingFrame();
    requestAnimationFrame(animate);
}

animate();



