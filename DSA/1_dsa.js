// Checking sum zero (problem 1)
// [-5,-4,-3,-2,0,2,4,6,8]  ---input
// [?,?] -> Output

// if element is sorted 
// abouve question is given is sorted

function getSumPairZero(array){
    for (let number of array){
        for (let j=1;j<array.length;j++){
            if(number + array[j]===0){
                return[number,array[j]];
            }
        }
    }
}
const result=getSumPairZero([-5,-4,-3,-2,0,2,4,6,8])
console.log(result);

// o(n^2) time complexity quadratic time complexity
//o(n)  