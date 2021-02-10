const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

export const passport = {
     x: 400,
     y: 500,
     width: 73,
     height: 69,
};

export function drawPassport(img, dX, dY, dW, dH) {
    ctx.drawImage(img, dX, dY, dW, dH);
};