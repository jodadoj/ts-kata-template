function powerSumDigTerm(n:number):number {
  const resultArr:number[] = [];
  for (let num = 2; num <270; num++){
    let powArr:number[] = calculatePowers(num);
    powArr.forEach( ele => {if (findSumOfDigits(ele)===num){resultArr.push(ele)}});
  }
  resultArr.sort( (a, b) => { return a-b} );
  console.table(resultArr);
  return resultArr[n-1];
  }

  export function findSumOfDigits(n: number):number {
    let digits = [...String(n)];
    //console.log(digits);
    let numbers= digits.map( (str) => Number(str) );
    //console.log(numbers);
    let sum = numbers.reduce(function(a, b) {return a + b});
    //console.log(sum);
    return sum;
  }

  function calculatePowers(base: number):number[]{
    const powArr:number[] = [];
    for (let power=2; power<13; power++ ){
        powArr.push(Math.pow(base, power));
    }
    return powArr;
  }

  //function isDudeney(n:number):boolean{
  //  const cube_rt = Math.round((Math.pow(n, 1/3)))
    //
  //  if (cube_rt*cube_rt*cube_rt != n){
  //      return false;
  //  }
    //
  //  let dig_sum:number=0;
  //  let temp:number= n;
  //  while (temp>0){
  //      let rem = temp % 10;
  //      dig_sum += rem;
  //      temp = Number(temp.toString().substring(0, temp.toString().length - 1));
  //  }
  //  return true;
  //}

  export default powerSumDigTerm;