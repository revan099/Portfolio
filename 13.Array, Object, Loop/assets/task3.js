let users = [
    { name: "Ali", age: 25 },
    { name: "Veli", age: 35 },
    { name: "Ayse", age: 28 },
    { name: "Fatma", age: 40 },
];

let olderThan30 = users.filter(user => user.age > 30);
let youngerThan30 = users.filter(user => user.age < 30);

console.log("30-dan böyük olanlar:", olderThan30);
console.log("30-dan kiçik olanlar:", youngerThan30);
