let arr2 = [203, 19, 2, 13, 196, 86, 35, 77];

let minIndex = arr2.indexOf(Math.min(...arr2));
let maxIndex = arr2.indexOf(Math.max(...arr2));

[arr2[minIndex], arr2[maxIndex]] = [arr2[maxIndex], arr2[minIndex]];

console.log("Dəyişdirilmiş array:", arr2);
