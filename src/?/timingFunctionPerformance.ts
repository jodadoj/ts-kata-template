import { callbackify } from "util";

export default function testingFunctionPerformance():void{
    const tenItems = prepapreInputArray(10);
    const ten2Items = prepapreInputArray(100);
    const ten3Items = prepapreInputArray(1000);
    const ten4Items = prepapreInputArray(10000);
    const ten5Items = prepapreInputArray(100000);
    const ten6Items = prepapreInputArray(1000000);
    const ten7Items = prepapreInputArray(10000000);
    const ten8Items = prepapreInputArray(100_000_000);

    testArr(tenItems);
    testArr(ten2Items);
    testArr(ten3Items);
    testArr(ten4Items);
    testArr(ten5Items);
    testArr(ten6Items);
    testArr(ten7Items);
    testArr(ten8Items);
    testArr(ten8Items);

};

function testArr(inputArr:number[]){

    const results = {
        sizeOfArray: inputArr.length,
        pushTime: testPush(inputArr),
        popTime: testPop(inputArr),
        shiftTime: testShift(inputArr),
        unshiftTime: testUnshift(inputArr)

    }
    console.table(results);
    console.log('\n\n');

}

function prepapreInputArray(arrSize:number):number[]{
    const filledArray:number[] = []
    for (let newNumber = 0; newNumber<arrSize; newNumber++){
        filledArray.push(newNumber);
    }
    return filledArray;
}

function testPush(inputArr:number[]):number{

    return timeIt(inputArr.push(0));
}

function testUnshift(inputArr:number[]):number{

    return timeIt(inputArr.unshift(0));
}

function testPop(inputArr:number[]):number{

    return timeIt(inputArr.pop());
}

function testShift(inputArr:number[]):number{

    return timeIt(inputArr.shift());
}

export function timeIt(callback:any):number{

    const startTime = performance.now();
    callback;
    const stopTime = performance.now();
    const elapsedTime = stopTime - startTime;
    return elapsedTime;
    
}