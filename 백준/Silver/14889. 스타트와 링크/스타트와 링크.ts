const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');

const N = parseInt(input[0]);
const ability = input.slice(1).map(line => line.split(' ').map(Number));

let minDiff = Infinity;

function calculateDifference(team1, team2) {
    let team1Ability = 0;
    let team2Ability = 0;

    for (let i = 0; i < team1.length; i++) {
        for (let j = 0; j < team1.length; j++) {
            team1Ability += ability[team1[i]][team1[j]];
            team2Ability += ability[team2[i]][team2[j]];
        }
    }

    return Math.abs(team1Ability - team2Ability);
}

function dfs(idx, team1) {
    if (team1.length === N / 2) {
        const team2 = [];
        for (let i = 0; i < N; i++) {
            if (!team1.includes(i)) {
                team2.push(i);
            }
        }
        const diff = calculateDifference(team1, team2);
        minDiff = Math.min(minDiff, diff);
        return;
    }

    for (let i = idx; i < N; i++) {
        dfs(i + 1, [...team1, i]);
    }
}

dfs(0, []);

console.log(minDiff);
