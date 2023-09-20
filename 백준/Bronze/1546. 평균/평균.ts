const fs = require('fs');

function calculateNewAverage(N: number, scores: number[]): number {
  const maxScore = Math.max(...scores);
  const newScores = scores.map(score => (score / maxScore) * 100);
  const sumNewScores = newScores.reduce((acc, score) => acc + score, 0);
  return sumNewScores / N;
}

const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const N = parseInt(input[0]);
const scores = input[1].split(' ').map(Number);

const newAverage = calculateNewAverage(N, scores);
console.log(newAverage.toFixed(2));
