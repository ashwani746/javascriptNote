// useCases
// 1 . weite code to got array of names from given array of users
//2. Get back only active users
// 3. sort users by age descending

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
      }

]


// filter()
//map()
//forloop()
//foreach()
//sort

//solution 1 - level 1
// const names=[];
// for (i=0;i<users.length;i++){
//     names.push(users[i].name)
// }
// console.log(names)

// solution 2
// foreach = Receives call back  , user = object

// users.forEach((user)=> {
//     names.push(user.name)
// });
// console.log(names)

// for active cases
// const names=[];
// users.forEach((user)=> {
//     if (user.isActive){
//     names.push(user.name)
//     }
// });
// console.log(names)



//solution 1 - level 1 for active cases

// const names=[];
// for (i=0;i<users.length;i++){
//     if (users[i].isActive){
//     names.push(users[i].name)
//     }
// }
// console.log(names)

// note- Breackdown the condition in use cases  
/*    the map()method return a new array,
      forEach() method does not return the new array
            forEach()---------> forloop() ...no return value
            No need to give indexing in forEach()
            
            map() method is similar to the forEach(),
            but it returns a new array
            */

            // level 3
// const names1=users.filter((user)=>user.isActive).map((user) =>user.name)
// console.log("names1",names1)


/*
Sort funtion 
*/

users.sort((user1,user2)=> user1.age <user2.age ? 1 : -1)
console.log(users)
// descending order

const names1=users.filter((user)=>user.isActive)
.sort((user1,user2)=> user1.age <user2.age ? 1 : -1)
.map((user) =>user.name)
console.log("names1",names1)
