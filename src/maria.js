const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

export const maria = {
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

export function drawMaria(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}



export function handleWalkingFrame() {
    if (maria.frameX < 3 && maria.walking) maria.frameX++;
    else maria.frameX = 0;
}
