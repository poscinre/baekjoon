const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0], 10);
const meetings = [];

for (let i = 1; i <= N; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    meetings.push({ start, end });
}

meetings.sort((a, b) => a.end - b.end || a.start - b.start);

let maxMeetings = 0;
let currentTime = 0;

for (const {start, end} of meetings) {
    if (start >= currentTime) {
        maxMeetings++;
        currentTime = end;
    }
}

console.log(maxMeetings);