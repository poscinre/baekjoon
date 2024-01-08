const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const members = input.slice(1).map(line => {
    const [age, name] = line.split(' ');
    return { age: parseInt(age), name };
});

members.sort((a, b) => {
    if (a.age === b.age) {
        return 0;
    }
    return a.age - b.age;
});

members.forEach(member => {
    console.log(`${member.age} ${member.name}`);
});
