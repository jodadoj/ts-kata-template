function countOccurances(inputString:string){
    let outputDict:Record<string, number>= {    };
    const alphabet:string = 'abcdefghijklmnopqrstuvwxyz';
    for (let letter of inputString.toLowerCase()){
        if (alphabet.includes(letter)){
            if (outputDict[letter]){
                outputDict[letter] += 1;
            }
            else{
                outputDict[letter]=1;
            }
        }
    }
    return outputDict;
}

export default countOccurances;

/*


console.log(countOccurances('HELLO'));
console.table(countOccurances('HeLLo WorLd'));
console.log(countOccurances(''));
console.table(countOccurances('!héllo! ?world?'));

let LetterFreq = {
    letter: 'a', //make an object for each letter
    count: 0
    a : number;
    b : number;
    c : number;
    d : number;
    e : number;
}

getMostCommonLetters(inputText, numberOfWinners){
    for (let char of inputText){

    }
}
*/