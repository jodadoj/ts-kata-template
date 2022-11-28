//import * as readline from 'readline';

/*
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
*/

//readline.emitKeypressEvents(process.stdin);
//process.stdin.setRawMode(true);

function convertEle(element: number){
    return element;
}

function newMap(numArr: number[], convertEle:(ele:number)=>number): number[] {
    const results: number[] = [];
    for (const element of numArr){
        results.push(convertEle(element));
    }
    return results;
  }
  
  export default newMap;
  