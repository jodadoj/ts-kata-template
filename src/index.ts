/*
function:
=========
name: sumList

parameter: numbers: list of numbers

return type: number

var array_name[:datatype];        //declaration 
array_name = [val1,val2,valn..]   //initialization

pseudo code:
============
set runningTotal to 0

for each number n in numbers
	increment runningTotal by n

return runningTotal


function sumList(numbers){
    let runningTotal = 0;
    for (let number of numbers){
      runningTotal += number;
    }
    return runningTotal;
  }
  
console.log(sumList([1,2,3,4,5]), 'expected', 15);
console.log(sumList([-9,2,-3,4,-7]),"expected",-7);
console.log(sumList([]), "expected",[]),

*/

/*function:
=========
name: calculateAverage

parameter: numbers: list of numbers

return type: number

pseudo code:
============
set runningTotal to 0
set count to 0

for each number n in numbers
	increment runningTotal by n
	increment count by 1

set average to runningTotal divided by count

return average


function calculateAverage(numbers){
  let runningTotal = 0;
  //let count = 0;    
  for (let number of numbers){
      runningTotal += number;
      //count += 1;
    }
  //let average = runningTotal/count;
  return runningTotal/numbers.length;
  //return average;
}

console.log(calculateAverage([1,2,3,4,5]),"expected",3);
console.log(calculateAverage([-Number.MAX_VALUE, 0, Number.MAX_VALUE]), 'expected', 0);
console.log(calculateAverage([-Number.MAX_VALUE, 1, Number.MAX_VALUE]), 'expected', 1);
*/

function getMax(numberArray){
  let max = 0;
  for(let i=0;i=numberArray.length;i++){
    if(numberArray[i]>max){
      max = numberArray[i];
    }
  }
  return max;
}

function getHighest(arrayArray){
  //const outputArray: number [] = [];
  const outputArray = [];
  for (let currentArray = 0; currentArray < arrayArray.length; currentArray++){
    outputArray.push(getMax(arrayArray[currentArray]));
  }
  return outputArray;
}

console.log(getHighest([[1],[2],[3]]), 'expected', [1, 2, 3])