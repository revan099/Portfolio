// let fetchrequest = fetch ("http://localhost:3000/users")

const { json } = require("body-parser");
const { response } = require("express");

//  .then((response)=> response.json())
// .then((data)=>{console.log(data);
// })
// .catch((err)=>{console.log(err);
// ;
// })


// function getData() {
//     fetch("http://localhost:3000/users")
//       .then((response) => response.json())
//       .then((data) => {
//         const userList = document.querySelector("ul");
//         data.forEach((user) => {
//           userList.innerHTML += `<li>${user.name}</li>`;
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
  
//   getData();

function getPost(){
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
    
}
  