let numbers = [];
let sum = 0;
let count = 0;

while (count < 10) {
    let num = parseInt(prompt("Ədəd daxil edin:"));
    numbers.push(num);
    sum += num;
    count++;
}

let average = sum / numbers.length;
console.log("Ədədi orta:", average);
