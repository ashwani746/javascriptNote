//   console.log(5 > "15" < 5);
//   // 5 > 15 false
//   // false < 5
//   // 0 < 5  true
//   console.log(7 < "15" < 7);
//   // 7 < 15 -> true < 7  true
//   console.log(7 < "85" > 5);
//   false;

//   console.log("============");

//   console.log(1); // synchronous statement
//   setTimeout(() => {
//     console.log(2);
//   }, 1000);

//   setTimeout(() => {
//     console.log(3);
//   }, 0);

//   console.log(4); // synchronous statement

//   console.log("============");

//   console.log(1);

//   setTimeout(() => {
//     console.log(2);
//   }, 1000);

//   setTimeout(() => {
//     console.log(3);
//   }, 0);

//   Promise.resolve(1).then(function resolve() {
//     setTimeout(() => {
//       console.log(4);
//     }, 0);
//   });
// // output 1 5 3 4 2
//   console.log(5);

//   // 5th question asked
//   for (var i = 0; i < 4; i++) {
//     console.log(i);
//   }

//   for (let i = 0; i < 4; i++) {
//     console.log(i);
//   }
//  console.log("=======================");

//   for (var i = 0; i < 4; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 500);
// }   // output 4 4 4 4

// for (let i = 0; i < 4; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 7000);
// }   // 0 1 2 3

// for (var i = 0; i < 4; i++) {
//     (function (i) {
//       setTimeout(function () {
//         console.log(i);
//       }, 14000);
//     })(i);
// }  // 0 1 2 3

// // 7th question asked
// console.log(["a"] + ["b"]);
//  // a + b
//  // ab
// console.log([] + []);
// // " " + " "
// // " "
// console.log(![]);
// // empty store the refrence is truty
// // negotiation of truty
// // false
// console.log(![] + []);
// // false + ""
// // false


// // 8th question asked
// const x1 = new Promise((res, req) => {
//   setTimeout(res, 500, "one");
// });

// const x2 = new Promise((res, req) => {
//   setTimeout(res, 100, "two");
// });

// Promise.all([x1, x2]).then((res) => {
//   console.log(res);
// });
// // ['one','two]
// Promise.race([x1, x2]).then((res) => {
//   console.log(res);
// });
// // two 

// // ->two , ['one','two']


// 9th question asked 
// const a = {};
// const b = {key: "b"};
// const c = {key: "c"};

// a[b] = 143;   // a["object object"] = 143
// a[c] = 286;   // a["object object"] = 286

// console.log(a[b]);  // 286
// console.log(b.toString()); //[object object]

// const h1 = { h: "Thor", i: "IM" };
// const h2 = { h: "Thor", i: "IM" };
// const h3 = h2;
// console.log(h1 == h2);   // false
// console.log(h1 === h2);  // false
// console.log(h2 === h3); // true

/* console.log(h1 == h2);
h1 and h2 are two different objects with the same properties. The == operator checks for object identity, not equality of properties.
Output: false

console.log(h1 === h2);
The === operator also checks for object identity.
Output: false

console.log(h2 === h3);
h3 is a reference to the same object as h2.
Output: true */

// const array1 = [1, 2, 3];
// const array2 = [1, 2, 3];
// const array3 = array2;
// console.log(array1 === array2);  //false
// console.log(array2 === array3);  // true

// const User = function (name) {
// this.name = name;
// };
// const user1 = new User("Rowdy");
// const user2 = new User("Rowdy");
// console.log(user1 == user2);     // false

/* 
 console.log(array1 === array2);
array1 and array2 are two different arrays with the same elements. The === operator checks for object identity, not equality of elements.
Output: false

console.log(array2 === array3);
array3 is a reference to the same array as array2.
Output: true

const user1 = new User('Rowdy');
const user2 = new User('Rowdy');
console.log(user1 == user2);
user1 and user2 are two different instances of the User constructor with the same properties. The == operator checks for object identity.
Output: false
 */


// console.log((1 && 2) || 0 || 3);

// console.log(null && undefined);

// console.log(0 || (1 && 2) || 3);

// console.log(null || (2 && 3) || 4);



// function curryFuntion(a){
//     return function(b)
//     {
//         const mult = a*b;
//         return function(c){
//             return res = mult*c
//         }
//     }
// }

// console.log(curryFuntion(2)(3)(4));

const str1 = "hello"
const str2 = "world 1234"
// str3 = "helloworld"
function mergeTwoString(){
        let 
}