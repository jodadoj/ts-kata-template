export function twoSum(nums: number[], target: number): number[] {

    let startTime: number = performance.now();
    let answer: number[] = twoSumTimed(nums, target)
    let stopTime: number = performance.now();
    let elapsedTime: number = stopTime - startTime;

    console.log("time taken ", elapsedTime);

    startTime = performance.now();
    answer = twoSums(nums, target)
    stopTime = performance.now();
    elapsedTime = stopTime - startTime;

    console.log("time taken ", elapsedTime);

    return answer;
}

function twoSumTimed(nums: number[], target: number): number[] {
    const targetNums: number[] = nums.map((ele) => { return target - ele })
    const targetSet = new Set(targetNums)
    const ansSet = new Set(nums.filter((ele) => targetSet.has(ele)));
    let i: number = 0;
    let firstIndex: number = 0;
    let secondIndex: number = 0;firstIndex = nums.findIndex((ele) => (ele === [...ansSet][i]))
        secondIndex = nums.findIndex((ele, index) => (ele === target -
            [...ansSet][i] && index > firstIndex))
    return [firstIndex, secondIndex]
};

function twoSums(nums: number[], target: number): [number, number] {
	let hash:Record<number, number>={}
	
	for(let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if(hash[target - n] !== undefined) {
			return [hash[target - n], i];
		}
		hash[n] = i;
	}
	return [-1, -1];
  }; 