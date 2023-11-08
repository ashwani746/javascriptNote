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

// const arr= [1,2];

// const append = (arr,ele) => {
//      return[...arr,ele]
   
    // arr.push(ele);
    // return arr;
// }
// console.log(append(arr,3));   // add in original array
// console.log(arr)

// const newArray = append(arr,4);
// console.log(newArray);
// console.log(arr);
// so i want to my original array not modyfy

//the spread operator [..arr,ele]
// console.log(append(arr,4));
// console.log(arr);



//  3 remove Dublicate element in the array

//level 0        push(ele)

// const arr= [1,2,3,3,4,5]
// function uniqueArray(){
//     const  uniqueElements=[];

//     arr.forEach((ele) => {
//     if(!uniqueElements.includes(ele)){
//         uniqueElements.push(ele)
//     }
//     })
//     return uniqueElements;
// }
// console.log(uniqueArray(arr))



// level 1   set()
// The Set object lets you store unique values of any type, whether primitive values or object references.
// Description
// Set objects are collections of values. A value in the set may only occur once; it is unique in the set's collection. You can iterate through the elements of a set in insertion order. The insertion order corresponds to the order in which each element was inserted into the set by the add() method successfully (that is, there wasn't an identical element already in the set when add() was called).

// const arr= [1,2,3,3,4,5]
// function uniqueArray(arr){
//     return [...new Set(arr)]    // Set goes to array object form
// }
// consoleog(uniqueArray(arr))
// console.log(arr)      // not change the original array

// level 2 Reduce method
// const arr= [1,2,3,3,4,5]
// const UniqueArray =(arr) => {
//             return arr.reduce((acc,ele)=>{
//                 return acc.includes(ele) ? acc : [...acc,ele]
//             },[])
// }
// console.log(UniqueArray(arr))


// 4 Concatenating the Array           concat()
  //  merging of two element

  const mergeArray = (arr1,arr2) =>{
    return arr1.concat(...arr2);

    // return [...arr1,...arr2]    //not change in original array
    
    //   arr1.push(...arr2)   // have change original aray
    //   return arr1
  }
  const arr1 = [4,5,6];
  const arr2=[2,3];
  const result = mergeArray(arr1,arr2);
  console.log(result,arr1,arr2)