// Checking sum zero (problem 1)
// [-5,-4,-3,-2,0,2,4,6,8]  ---input
// [?,?] -> Output

// if element is sorted 
// abouve question is given is sorted

// Use Another Solution 
 function findSumPair(array){
    let left=0;
    let right= array.length-1;
    while(left<right){
        sum=array[left]+array[right];
        if(sum===0){
            return [array[left],array[right]]
        }else if(sum>0){
            right--;

        }else{
            left++;
        }
    }
 }

 const result=findSumPair([-5,-4,-3,-2,0,2,4,6,8])
console.log(result);

// o(n) time complexity