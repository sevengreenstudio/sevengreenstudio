const img1 = document.querySelector(".bgd .updates .area .news .game_1");
const img2 = document.querySelector(".bgd .updates .area .news .game_2");
const img3 = document.querySelector(".bgd .updates .area .news .game_3");
const img4 = document.querySelector(".bgd .updates .area .news .game_4");
const img5 = document.querySelector(".bgd .updates .area .news .game_5");

let i = 1;
let time = 5000;

setTimeout("Slide()", 1);

function Slide() {
    if (i == 1) {
        img2.classList.remove("live");
        img3.classList.remove("live");
        img4.classList.remove("live");
        img5.classList.remove("live");
        img1.classList.add("live");
        i++;
        setTimeout("Slide()", time);
    }
    else if (i == 2) {
        img1.classList.remove("live");
        img3.classList.remove("live");
        img4.classList.remove("live");
        img5.classList.remove("live");
        img2.classList.add("live");
        i++;
        setTimeout("Slide()", time);
    }
    else if (i == 3) {
        img1.classList.remove("live");
        img2.classList.remove("live");
        img4.classList.remove("live");
        img5.classList.remove("live");
        img3.classList.add("live");
        i++;
        setTimeout("Slide()", time);
    }
    else if (i == 4) {
        img1.classList.remove("live");
        img3.classList.remove("live");
        img2.classList.remove("live");
        img5.classList.remove("live");
        img4.classList.add("live");
        i++;
        setTimeout("Slide()", time);
    }
    else if (i == 5) {
        img1.classList.remove("live");
        img3.classList.remove("live");
        img4.classList.remove("live");
        img2.classList.remove("live");
        img5.classList.add("live");
        i = 1;
        setTimeout("Slide()", time);
    }
}