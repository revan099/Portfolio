

const sentence = "My name is Revan";
const longText = "Hello jJvascript";
const testStr = "HELLO world CODE JS";


////////// Task 1
function findVowels(str) {
    const vowels = "aeiouəıöüAEIOUƏIÖÜ";
    return str.split("").filter(char => vowels.includes(char));
}
console.log("saitler:", findVowels(testStr)); 
console.log("----");

///////////////// Task 2
function countWords(str) {
    return str.trim().split(/\s+/).length;
}
console.log("sozlerin sayi:", countWords(testStr));
console.log("----");

////////////////// Task 3
function findLongestWord(str) {
    const words = str.trim().split(/\s+/);
    return words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}
console.log("en uzun soz:", findLongestWord(testStr)); 
console.log("----");

///////////////////// Task 4
function printUppercaseWords(str) {
    const words = str.split(" ");
    words.forEach((word, index) => {
        if (word === word.toUpperCase() && word.match(/[A-ZƏÖÜIŞÇĞ]+/)) {
            console.log(`soz: ${word}, indeks: ${index}`);
        }
    });
}
console.log("tam herfli sozler ve indeksleri:");
printUppercaseWords(testStr);
console.log("----");

///////////////////// Task 5
function printWordsWithMoreThan2Uppercase(str) {
    const words = str.split(" ");
    words.forEach(word => {
        const uppercaseCount = word.split("").filter(l => l === l.toUpperCase() && /[A-ZƏÖÜIŞÇĞ]/.test(l)).length;
        if (uppercaseCount > 2) {
            console.log(word);
        }
    });
}
console.log("2-den çox boyuk herfli sozler:");
printWordsWithMoreThan2Uppercase(testStr);
console.log("----");

//////////////////////// Task 6
function getCapitalLetters(str) {
    return str
        .split(" ")
        .map(word => word[0])
        .filter(ch => ch === ch.toUpperCase() && /[A-ZƏÖÜIŞÇĞ]/.test(ch))
        .join("");
}
console.log("bas herflerin birlesmesi:", getCapitalLetters(sentence)); 
console.log("----");

///////////////////// Task 7
function abbreviateWords(str) {
    return str.split(" ").map(word => {
        if (word.length < 4) return word;
        return word[0] + (word.length - 2) + word[word.length - 1];
    }).join(" ");
}
console.log("ixtisar olunmus sozler:", abbreviateWords(longText));

/////////////new task

/////////////////////// task1
function removeDuplicatesAndCount(arr) {
    const counts = {};
    const unique = [];

    arr.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] === 1) unique.push(num);
    });

    console.log("trkrar sayi:", counts);
    return unique;
}

const repeatedArr = [1, 2, 3, 2, 4, 1, 5, 3, 6];
console.log("unikal ededler:", removeDuplicatesAndCount(repeatedArr));
console.log("-----");

/////////////////////// task2
const customers = [
  {
    name: "Tyrone",
    personal: {
      age: 33,
      hobbies: ["Bicycling", "Camping"],
    },
  },
  {
    name: "Elizabeth",
    personal: {
      age: 25,
      hobbies: ["Guitar", "Reading", "Gardening"],
    },
  },
  {
    name: "Penny",
    personal: {
      age: 36,
      hobbies: ["Comics", "Chess", "Legos"],
    },
  },
];

function getAllHobbies(data) {
    return data.reduce((acc, customer) => {
        return acc.concat(customer.personal.hobbies);
    }, []);
}

console.log("butun hobbiler:", getAllHobbies(customers));
console.log("----");

/////////////////////// task3 
function analyzeRandomArray(length = 10) {
    const arr = Array.from({ length }, () => Math.floor(Math.random() * 100));

    const total = arr.reduce((sum, num) => sum + num, 0);
    const average = total / arr.length;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const squares = arr.map(num => num ** 2);

    return {
        original: arr,
        total,
        average,
        max,
        min,
        squares
    };
}

const analysis = analyzeRandomArray(10);
console.log("random array:", analysis.original);
console.log("Toplam:", analysis.total);
console.log("ortalama:", analysis.average.toFixed(2));
console.log("en boyuk:", analysis.max);
console.log("en kiçik:", analysis.min);
console.log("kvadratlar:", analysis.squares);
console.log("-----");

