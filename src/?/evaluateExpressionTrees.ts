type operation = "*"|"+"|"-"|"/";
type expressionTree = number|operation|expressionTree[] //earlier error due to defining as array rather than defining contents of an array!

//takes all of this out of scope to type check without actually doing anything
{
    const seven:expressionTree = 7;
    const simple:expressionTree = [2, "*"];
    const lessSimple:expressionTree = [3,[2,3]];
    const complex:expressionTree = [10, [2, 3, 6], [1, [100, [3, 4], 5]]];
}

export default function evaluateExpressionTrees(input:expressionTree[]):number{

    return checkElements(input, 0);

}

//think we need a bracket component
function checkElements(input:expressionTree[], lastElement:number):number{

    let count = 0;
    for (let element of input){
        if (typeof(element)!=='number'&&typeof(element)!=="string"){
            try{
                count += checkElements(element, lastElement);
            }
            catch{
                console.error("unsupported value was entered into the array");
            }
        }
        if (typeof(element)==='string'){

        }
        if (typeof(element)==='number'){
            count += element;
       }
    }

    return count;
}