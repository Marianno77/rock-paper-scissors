const player_img = document.getElementById('player');
const round = document.getElementById('round');
const txt = document.getElementById('txt');
const result = document.getElementById('result');
const si_img = document.getElementById('si');

const player_point_txt = document.getElementById('player_point');
const si_point_txt = document.getElementById('si_point');

let count = 1;
let player_point = 0;
let si_point = 0;

let si;

window.onload = () => {
    write_points();
}

const choise = (x) => {

    let rng = random(3)


    switch (rng) {
        case 0:
            //si_point_txt.innerHTML = "rock";
            si = 'rock';
            si_img.src = "rock.png";
            break;

        case 1:
            //si_point_txt.innerHTML = "paper";
            si = 'paper';
            si_img.src = "paper.png";
            break;

        case 2:
            //si_point_txt.innerHTML = "scissors";
            si = 'scissors';
            si_img.src = "scissors.png";
            break;
    }

    switch (x) {
        case 'rock':
            //player_point_txt.innerHTML = "rock";
            player_img.src = "rock.png";
            break;

        case 'paper':
            //player_point_txt.innerHTML = "paper";
            player_img.src = "paper.png";
            break;

        case 'scissors':
            //player_point_txt.innerHTML = "scissors";
            player_img.src = "scissors.png";
            break;
    }

    add_class();
    check(x, si);
}

const check = (player, si) => {
    if (player == si) {
        result.innerHTML = "DRAW"
    }

    if (player == 'rock' && si == 'paper') {
        result.innerHTML = "DEFEAT";
        si_point++;
    }

    if (player == 'rock' && si == 'scissors') {
        result.innerHTML = "WIN"
        player_point++;
    }

    if (player == 'paper' && si == 'scissors') {
        result.innerHTML = "DEFEAT";
        si_point++;
    }

    if (player == 'paper' && si == 'rock') {
        result.innerHTML = "WIN";
        player_point++;
    }

    if (player == 'scissors' && si == 'rock') {
        result.innerHTML = "DEFEAT";
        si_point++;
    }

    if (player == 'scissors' && si == 'paper') {
        result.innerHTML = "WIN";
        player_point++;
    }

    txt.innerHTML = "VS";
    write_points();
    count++;
}

const write_points = () => {
    round.innerHTML = "Round " + count;
    player_point_txt.innerHTML = player_point;
    si_point_txt.innerHTML = si_point;
}

const add_class = () => {
    txt.classList.add("slide-top");
    player_img.classList.add("slide-bottom");
    si_img.classList.add("slide-bottom");
    result.classList.add("slide-bottom");
    player_img.style.opacity = '1.0';
    si_img.style.opacity = '1.0';

    setTimeout(function () {
        remove_class();
    }, 300);
}

const remove_class = () => {
    player_img.classList.remove("slide-bottom");
    si_img.classList.remove("slide-bottom");
}


function random(max) {
    return Math.floor(Math.random() * max);
}

if (count == 1) {
    player_img.style.opacity = '0.0';
    si_img.style.opacity = '0.0';
}