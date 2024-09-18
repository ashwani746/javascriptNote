// Prototypal inheritance and Prototype Chain

// ES6 Introduced classes which is the modern ways to construct object

// That said , prototypal inheritance and prototype chain are:
// 1 . "under the hood", (Es6 classes are considered "syntactic sugar")
// 2) often in interview questions
// and are useful to understand.

const person = {
    alive: true
}

const musician = {
    plays: true 
}
// musician.__proto__= person;
// console.log(musician.plays);
// console.log(musician.alive);

// console.log(musician)

Object.setPrototypeOf(musician,person)
console.log(musician.alive)
console.log(musician.plays)


window.console.log(window)   // window is global object
console.log(document.body)   
console.log(document)   
document.body.style.background = "red"