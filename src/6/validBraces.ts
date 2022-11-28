function validBraces(braces:string){
    let nextChar:string[] = [];
    for (let char of braces){
      //console.log(char);
      //console.log(nextChar);
      if (char==="{") {
        nextChar.unshift("}");
      }
      if (char==="(") {
        nextChar.unshift(")");
      }
      if (char==="[") {
        nextChar.unshift("]");
      }
      if (char!=="[" && 
          char!=="(" && 
          char!=="{" && 
          char!==nextChar[0]) {
        return false;
      }
      if (char===nextChar[0]){
        nextChar.shift();
        //console.log(nextChar);
      }
    }
    if (nextChar.length===0){
      return true;
    }
    return false;
  }

  export default validBraces