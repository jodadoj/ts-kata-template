import collectByLetter from "./collectByLetter";
test("Collects words by groups of first letter", () => {
    console.log('heres the output HELLO', typeof collectByLetter);
    console.log(collectByLetter)
    expect(collectByLetter(['H'])).toEqual({h:['H']});
});