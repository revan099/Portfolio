//task1


function calculate(a, b, operator) {
    if (operator === "+") return a + b;
    if (operator === "-") return a - b;
    if (operator === "*") return a * b;
    if (operator === "/") return b !== 0 ? a / b : "Sifira bolmek olmaz";
    
}

console.log("toplama:", calculate(5, 3, "+"));
console.log("cıxma:", calculate(10, 4, "-"));
console.log("vurma:", calculate(6, 7, "*"));
console.log("bolme:", calculate(20, 5, "/"));


//task2
function findoddevennumbers(...numbers) {
    let odd = [];
    let even = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            even[even.length] = numbers[i];
        } else {
            odd[odd.length] = numbers[i];
        }
    }

    return { even, odd };
}

let result = findoddevennumbers(14, 20, 35, 40, 57, 60, 100);
console.log("Cut ededler:", result.even);
console.log("Tek ededler:", result.odd);

//task3
function sumdivisiblenumbers(arr) {
    let sum = 0;
    let i = 0;

    while (i < arr.length) {
        if (arr[i] % 4 === 0 && arr[i] % 5 === 0) {
            sum += arr[i];
        }
        i++;
    }

    return sum;
}

console.log("4 və 5 bolunen ededlerin cemi:", sumdivisiblenumbers([14, 20, 35, 40, 57, 60, 100]));

// task4
function countoccurrences(sentence, char) {
    let count = 0;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === char) {
            count++;
        }
    }

    return count;
}


console.log("Simvolun sayi:", countoccurrences("Salam", "a"));



// task6


function squarearray(arr) {
    let squaredArray = [];

    for (let i = 0; i < arr.length; i++) {
        squaredArray[squaredArray.length] = arr[i] * arr[i]; 
    }

    return squaredArray;
}

console.log(squarearray([2, 4, 6, 8])); 
console.log(squarearray([-1, 3, 5]));   