
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


class Dialogue {
    constructor(){
        this.textbox = new Image();
        this.textbox.src = "./dist/images/dialogue.png"

        this.dialogueText = [
            { string: "Hey! Can you help me? I need to catch my flight!!!" },
            { string: "I'm missing my passport, my flight tickets, and my wallet. I only have t" }
        ]

        this.keys = [];


        window.addEventListener("keydown", (e) => {
            const key = e.keyCode || e.key; //keyCode is deprecated
            this.keys[key] = true;
        });

        window.addEventListener("keyup", (e) => {
            const key = e.keyCode || e.key;
            delete this.keys[key];
        });


        this.activeDialogue = false;
    }



    drawDialogue(ctx) {
        ctx.drawImage(textbox, 100, 400, 500, 300)
    };

    clearDialogue() {
        if (keys[32] && player.y > 100) {
            
        }
    };

}
