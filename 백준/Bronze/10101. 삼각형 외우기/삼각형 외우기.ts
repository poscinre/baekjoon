const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const angles = input.map(Number);

const sum = angles.reduce((acc, angle) => acc + angle, 0);

if (sum === 180) {
  if (angles.every(angle => angle === 60)) {
    console.log("Equilateral");
  }
  else if (angles[0] === angles[1] || angles[1] === angles[2] || angles[0] === angles[2]) {
    console.log("Isosceles");
  }
  else {
    console.log("Scalene");
  }
} else {
  console.log("Error");
}
