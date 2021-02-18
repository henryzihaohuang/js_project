const countdown = () => {
    if (window.gameStart){
        let minutes = 1;
        let seconds = 59;

        setInterval(() => {
            seconds = (seconds % 60) < 10 ? "0" + seconds : seconds;
            if (seconds > 0 && minutes > 0){
                document.getElementById("countdown").innerHTML = minutes + " min : " + seconds + " sec before departure";
            } else {
                document.getElementById("countdown").innerHTML = "Time is up!";
                window.lostGame = true;
            }
            seconds--;
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            }
        }, 1000);
    }
}

export default countdown;