import { twoSum } from "./twoSum";

function generateWorstCaseArray(desiredLen: number): {
    arr: number[];
    targetSum: number;
} {
    const arr: number[] = [];
    for (let i = 0; i < desiredLen; i++) {
        arr.push(1);
    }
    arr[arr.length - 1] = 6;
    arr[arr.length - 2] = 4;
    return { arr, targetSum: 10 };
}

test("Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.", () => {

    const test1 = generateWorstCaseArray(10);
    const test2 = generateWorstCaseArray(100);
    const test3 = generateWorstCaseArray(1_000);
    const test4 = generateWorstCaseArray(10_000);
    const test5 = generateWorstCaseArray(100_000);
    const test6 = generateWorstCaseArray(10_000_000);
    const test7 = generateWorstCaseArray(100_000_000);

    expect(twoSum(test1.arr, test1.targetSum)).toEqual([test1.arr.length-2, test1.arr.length-1]);
    expect(twoSum(test2.arr, test2.targetSum)).toEqual([test2.arr.length-2, test2.arr.length-1]);
    expect(twoSum(test3.arr, test3.targetSum)).toEqual([test3.arr.length-2, test3.arr.length-1]);
    expect(twoSum(test4.arr, test4.targetSum)).toEqual([test4.arr.length-2, test4.arr.length-1]);
    expect(twoSum(test5.arr, test5.targetSum)).toEqual([test5.arr.length-2, test5.arr.length-1]);
    expect(twoSum(test6.arr, test6.targetSum)).toEqual([test6.arr.length-2, test6.arr.length-1]);
    expect(twoSum(test7.arr, test7.targetSum)).toEqual([test7.arr.length-2, test7.arr.length-1]);

})