const numbers = [1, 2, 3, 4, 5, 6, 1];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
const average = sum / numbers.length;

console.log(average);
