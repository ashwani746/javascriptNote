const users = [
    {
      id:1,
      name:"Ajay",
      isActive: true,
      age:20
    },
    {
      id:1,
      name:"Ashwani",
      isActive: true,
      age:29
    },
    {
      id:1,
      name:"Pranjal",
      isActive: true,
      age:30
    },
    {
      id:1,
      name:"Ankit",
      isActive: false,
      age:40
    },

]

// 1. Check if user with such name Exits or not
    //    usecase  //
// level 0

// const isNameExist=(name,users)=>{
//     let exist = false;
//     for (let i=0;i<users.length;i++){
//         if(users[i].name === name){
//             exist= true;
//         }
//     }
//     return exist;
// }

// output level 0
// isNameExist('ram',users);
//   false



//   level 1 solution
// const isNameExist=(name,users)=>{
//   const user = users.find((user) => user.name === name)
//   return user;                          // give me full Object
// }
         
//    level 2 solution
// const isNameExist=(name,users)=>{
//     const user = users.find((user) => user.name === name)
//     return Boolean(user)                 // for we needed value             
//   }



//   const isNameExist=(name,users)=>{
//     const index = users.findIndex((user) => user.name === name)
//     return index >= 0
//   }

   // level 3 solution   >>>some funtion return the boolean value
// const isNameExist=(name,users)=>{
//     const user= users.some((user) => user.name === name)
//     return user
//   }




// 2. Adding New Element to the Array

const arr= [1,2];

const append = (arr,ele) => {
     return[...arr,ele]
   
    // arr.push(ele);
    // return arr;
}
// console.log(append(arr,3));   // add in original array
// console.log(arr)

// const newArray = append(arr,4);
// console.log(newArray);
// console.log(arr);
// so i want to my original array not modyfy

//the spread operator [..arr,ele]
console.log(append(arr,4));
console.log(arr);



//  3 remove Dublicate element in the array



