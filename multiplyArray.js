const numbers = [2, 5, 8, 3, 10];

// หาค่าที่มากที่สุดในอาร์เรย์
const maxNumber = Math.max(...numbers);

// คูณทุกค่าในอาร์เรย์ด้วยค่าที่มากที่สุด
const multipliedArray = numbers.map(num => num * maxNumber);

console.log("ค่าที่มากที่สุด:", maxNumber); // 10
console.log("อาร์เรย์ที่คูณทุกค่าด้วยค่าที่มากที่สุด:", multipliedArray); // [20, 50, 80, 30, 100]
