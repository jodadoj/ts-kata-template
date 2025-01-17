export type MarkedChar = {state: "C"} | { state: "WP"} | {state: "W"}; // W - Wrong, WP - Wrong Position, C - Correct
export type MarkedGuess = [MarkedChar, MarkedChar, MarkedChar, MarkedChar, MarkedChar];

function markWordleGuess(guess: string, hiddenTarget: string):MarkedGuess{
    const guessArr:string[] = [...guess]; //split into characters
    const targetArr:string[] = [...hiddenTarget];
    let remainingLettersCounts:{[char : string]:number} = {}; //define empty object, think it's any at this point
    let result:MarkedGuess = [{ state: "W" }, { state: "W" }, { state: "W" }, { state: "W" }, { state: "W" }]
    for (let index = 0; index<5; index++){ //check for correct positions
        const char = targetArr[index]; //defined char to make easier to read with below
        if (!remainingLettersCounts[char]){ //if we're not looking for this letter
            remainingLettersCounts[char] = 0; //set a new property for it to equal 0
        } 
        remainingLettersCounts[char] += 1; //collect a count for each letter
        if (guessArr[index]===targetArr[index]){ //mark as correct if the guess is in the right space
            result[index] = {state: "C"};
            remainingLettersCounts[char] -=1; //determined the position of one of the characters so no longer looking for it's position
        }
    }
    console.log(remainingLettersCounts); //log the character's we're looking for
    for (let index = 0; index<5; index++){ //second loop to check for correctly positioned guesses
        const char = guessArr[index];
        if (!remainingLettersCounts[char]){ //if we're not looking for this letter
            remainingLettersCounts[char] = 0; //set a new property for it to equal 0 to prevent an error, probs unnecessary
        } 
        console.log(char, remainingLettersCounts[char], hiddenTarget.includes(char), guessArr[index]!==targetArr[index], remainingLettersCounts[char] > 0, (guessArr[index]!==targetArr[index] && hiddenTarget.includes(char) && remainingLettersCounts[char] > 0));
        //above checks where the condition breaks for testing
        if (guessArr[index]!==targetArr[index] //if the letter is not the correct guess
            && hiddenTarget.includes(char) //but is inside the words
            && remainingLettersCounts[char] > 0){ //and we're still expecting another of this character
            result[index] = { state: "WP"}; //state the character is in the wwrong position
        }
        remainingLettersCounts[char] -= 1; //expect one fewer of this character
    }
    return result; //returns with alterations for Correct and Wrongly Positioned characters
}
export default markWordleGuess;