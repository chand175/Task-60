
let heading = document.querySelectorAll('h1');


for (let i = 0; i < heading.length; i++) {

    heading[i].style.cssText = "color:green"
}


let paragraph = document.querySelectorAll('.paragraph');
for (let i = 0; i < paragraph.length; i++) {

    paragraph[i].style.cssText = "color:red; text-transform : uppercase";
}
console.log(paragraph)



// paragraph.style.cssText = "color:red; text-transform : uppercase";

// const prompt = require("prompt-sync")();

// console.log("satya")
// let Name = prompt("enter the name : ")
// console.log(Name)
