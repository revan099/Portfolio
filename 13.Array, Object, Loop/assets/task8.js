let arr3 = [203, 19, 2, 13, 196, 86, 35, 77];

let minVal = Math.min(...arr3);
let maxVal = Math.max(...arr3);

let sumWithoutMinMax = arr3.reduce((sum, num) => {
    if (num !== minVal && num !== maxVal) {
        return sum + num;
    }
    return sum;
}, 0);

console.log("Min və max çıxılandan sonra cəmi:", sumWithoutMinMax);
