function collectByLetter(inputArray){
    let outputDict = {    };
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let word of inputArray){
        let firstLetter = word[0].toLowerCase();
        if (alphabet.includes(firstLetter)){
            if (outputDict[firstLetter]){
                outputDict[firstLetter].push(word);
            }
            else{
                outputDict[firstLetter]=[word];
            }
        }
    }
    return outputDict;
}

console.table(collectByLetter(["shall", "i", "compare", "thee", "to", "a", "summer's"]));

function getWordsFromYeats(){
    //The Second Coming - W. B. Yeats, 1919
    //https://en.wikipedia.org/wiki/The_Second_Coming_(poem)
    const rawText = `Turning and turning in the widening gyre
The falcon cannot hear the falconer;
Things fall apart; the centre cannot hold;
Mere anarchy is loosed upon the world,
The blood-dimmed tide is loosed, and everywhere
The ceremony of innocence is drowned;
The best lack all conviction, while the worst
Are full of passionate intensity.

Surely some revelation is at hand;
Surely the Second Coming is at hand.
The Second Coming! Hardly are those words out
When a vast image out of Spiritus Mundi
Troubles my sight: somewhere in sands of the desert
A shape with lion body and the head of a man,
A gaze blank and pitiless as the sun,
Is moving its slow thighs, while all about it
Reel shadows of the indignant desert birds.
The darkness drops again; but now I know
That twenty centuries of stony sleep
Were vexed to nightmare by a rocking cradle,
And what rough beast, its hour come round at last,
Slouches towards Bethlehem to be born?`
    return rawText.split(/[ ;\n,.?]/)
        .filter(s => s!=="")
        .map(s => s.toLowerCase())
}

function getWordsFromShakespeare(){
    //Sonnet 18: Shall I compare thee to a summer’s day?
    //William Shakespeare
    //https://www.poetryfoundation.org/poems/45087/sonnet-18-shall-i-compare-thee-to-a-summers-day
const sonnet = `Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer's lease hath all too short a date;
Sometime too hot the eye of heaven shines,
And often is his gold complexion dimm'd;
And every fair from fair sometime declines,
By chance or nature's changing course untrimm'd;
But thy eternal summer shall not fade,
Nor lose possession of that fair thou ow'st;
Nor shall death brag thou wander'st in his shade,
When in eternal lines to time thou grow'st:
   So long as men can breathe or eyes can see,
   So long lives this, and this gives life to thee.`

    return sonnet.split(/[,:;. ?\n!]/) //keep ' and 
        .filter(s => s !== "")
        .map(s => s.toLowerCase());
}

console.table(collectByLetter(getWordsFromShakespeare()));
console.table(collectByLetter(getWordsFromYeats()));
