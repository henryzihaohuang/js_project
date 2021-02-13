export const sunny = {
    x: 180,
    y: 380,

    width: 136,
    height: 172,

    //which index of sprite frame to animate
    frameX: 0,
    frameY: 0,

    speed: 8,
    walking: false
};

export function handleWalking() {
    if (sunny.frameX < 3 && sunny.walking) {
        sunny.frameX ++;
    } else {
        sunny.frameX = 0;
    }
}
