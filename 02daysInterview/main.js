// global scope
/*
let x = 1;

const parentFunction = () => {
  //local scope
  let myvalue = 2;
  console.log(x);
  console.log(myvalue);
  
  const childFuntion = () => {
    console.log((x += 10));
    console.log(myvalue += 1)
  };
  return childFuntion;
};
const result = parentFunction();
console.log(result);
result()
result()
result()

console.log(x)
console.log(myvalue) // reference error , private variable */

// IIFE (immediately Invoked function expression )

const privateCounter = (()=>{
   let count = 0;
   console.log(`initial value: ${count}`)
   return ()=>{
    count +=1; 
    console.log(count)
   }
})();

privateCounter()
privateCounter()
privateCounter()

const credits = ((num) => {
  let credits = num;
  console.log(`initaial credite value : ${credits}`)
  return ()=>{
    credits -=1;
    if(credits>0)
      console.log(`playing game, ${credits} credits(s) remaining`)
    if(credits<=0)
      console.log(`not enough credits`)
  }
})(3);

credits();
credits();
credits();