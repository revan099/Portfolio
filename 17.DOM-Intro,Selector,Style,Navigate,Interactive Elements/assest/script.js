// melumat
let property = {
    image: 'https://picsum.photos/350/200?random=' + Math.floor(Math.random() * 1000),
    title: 'Ev tipi: Detached House',
    price: '$750,000',
    address: '742 Evergreen Terrace',
    features: '3 Bedrooms, 2 Bathrooms',
    agent: 'agent: Revan Huseynov, Tel: (012)345-67-89'
};

// konsol
console.log("melumat:");
console.log("sekil: " + property.image);
console.log("basliq: " + property.title);
console.log("qiymet: " + property.price);
console.log("unvan: " + property.address);
console.log("xususiyyetler: " + property.features);
console.log("agent: " + property.agent);

// kart
let card = document.createElement('div');
card.style.width = '350px';
card.style.border = '2px solid #aaa';
card.style.margin = '20px auto';
card.style.fontFamily = 'Arial';
card.style.background = '#eee';

// sekil
let img = document.createElement('img');
img.src = property.image;
img.style.width = '100%';
img.style.height = '200px';
card.appendChild(img);

// basliq
let title = document.createElement('h2');
title.textContent = property.title;
card.appendChild(title);

// diger melumatlar
let price = document.createElement('p');
price.textContent = property.price;
card.appendChild(price);

let address = document.createElement('p');
address.textContent = property.address;
card.appendChild(address);

let features = document.createElement('p');
features.textContent = property.features;
card.appendChild(features);

let agent = document.createElement('p');
agent.textContent = property.agent;
card.appendChild(agent);

// button
let btn = document.createElement('button');
btn.textContent = "melumat";
card.appendChild(btn);

// elave et
document.body.appendChild(card);








/////////////////////task2

