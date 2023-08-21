const form = document.getElementsByTagName('form')[0];
const game = document.getElementById('game');
const scoreboard = document.getElementById('score');
const wins = document.getElementById('wins');
const logs = wins.children[3];
const symbols = ['♦️', '♥️', '♣️', '♠️'];
let team1 = '';
let team2 = '';
let score1 = 0;
let score2 = 0;
let wins1 = 0;
let wins2 = 0;

let i = 0;
[...document.getElementsByTagName('h1')[0].children].map((span) => {
    setInterval(() => {
        span.innerText = symbols[i];
        i++;
        if (i == symbols.length) i = 0;
    }, 1000);
});

const beginMatch = (name1, name2) => {
    game.style.display = 'grid';
    scoreboard.style.display = 'grid';
    wins.style.display = 'grid';

    document.getElementById('team1-name').innerText = name1;
    document.getElementById('team2-name').innerText = name2;
};

const updateScore = () => {
    scoreboard.children[0].innerText = score1;
    scoreboard.children[1].innerText = score2;
    wins.children[1].innerText = wins1;
    wins.children[2].innerText = wins2;
};

const win = (team) => {
    score1 = 0;
    score2 = 0;

    if (team == 1) {
        wins1++;
        logs.innerText = `Vitória do ${team1}!`
    } else {
        wins2++;
        logs.innerText = `Vitória do ${team2}!`
    }

    updateScore();
};

const add = (points, team) => {
    if (team == 1) {
        score1 += points;
    } else {
        score2 += points;
    }
    updateScore();

    if (score1 >= 12) win(1);
    else if (score2 >= 12) win(2);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    team1 = form.team1.value;
    team2 = form.team2.value;

    beginMatch(team1, team2);
});
