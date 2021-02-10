const countdown = () => {
    window.onload = () => {

        let minutes = 14;
        let seconds = 59;

        setInterval(() => {
            seconds = (seconds % 60) < 10 ? "0" + seconds : seconds;
            document.getElementById("countdown").innerHTML = minutes + " min : " + seconds + " sec before departure";
            seconds--;

            if (seconds === 0) {
                minutes--;
                seconds = 59;
            }
        }, 1000);
    }
}

export default countdown;