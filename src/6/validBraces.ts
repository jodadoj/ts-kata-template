function validBraces(braces:string){
    let nextBrace:string[] = []; //Throughout we keep track of our closing brackets
    for (let char of braces){ 
      //if opening a bracket then remember to close it in the correct order (LIFO)
      if (char==="{") {
        nextBrace.unshift("}"); //by setting the first element of nextBrace to the correct character
      }
      if (char==="(") {
        nextBrace.unshift(")");
      }
      if (char==="[") {
        nextBrace.unshift("]");
      }
      if (char=="]" || char==")" || char=="}"){ //then if closing a bracket
        if (char!==nextBrace[0]) { //and closing the correct set
          return false;
        }
      }
      //if we've found the correct end to a set of brackets
      if (char===nextBrace[0]){ 
        nextBrace.shift(); //remove it from the stack
      }
    }
    //once we've iterated through all the elements
    if (nextBrace.length===0){ //if there's no remaining open brackets
      return true;
    } 
    //otherwise we were expecting a bracket to close and there's an error
    return false;
  }

  export default validBraces