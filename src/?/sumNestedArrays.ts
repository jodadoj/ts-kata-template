type recursiveNumber = number|recursiveNumber[] //earlier error due to defining as array rather than defining contents of an array!

//takes all of this out of scope to type check without actually doing anything
{
    const seven:recursiveNumber = 7;
    const simple:recursiveNumber[] = [2];
    const lessSimple:recursiveNumber[] = [3,[2,3]];
    const complex:recursiveNumber[] = [10, [2, 3, 6], [1, [100, [3, 4], 5]]];
}

export default function sumNestedArrays(input:recursiveNumber[]):number{

    return countElements(input);

}

function countElements(input:recursiveNumber[]):number{

    let count = 0;
    for (let element of input){
        if (typeof(element)!=='number'){
            try{
                count += countElements(element);
            }
            catch{
                console.error("non-number value was entered into the array");
            }
        }
        if (typeof(element)==='number'){
            count += element;
       }
    }

    return count;
}