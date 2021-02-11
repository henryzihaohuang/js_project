export const sunny = {
    x: 200,
    y: 500,

    width: 136,
    height: 172,

    //which index of sprite frame to animate
    frameX: 0,
    frameY: 0,

    speed: 3,
    walking: false
};

export function handleWalking() {
    if (sunny.frameX < 3 && sunny.walking) {
        sunny.frameX ++;
    } else {
        sunny.frameX = 0;
    }
}
