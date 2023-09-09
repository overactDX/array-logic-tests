const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddCount = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddCount++;
  }
}

console.log("จำนวนค่าที่เป็นเลขคี่:", oddCount); // 5
