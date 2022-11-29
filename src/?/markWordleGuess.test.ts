import markWordleGuess from "./markWordleGuess";

test("Marks wordle guesses", () => {

    const w1 = "FOOLS"
    const g1 = "CROAK"
    const w2 = "HOLAS"
    const g2 = "HELLO"
    const w3 = "LOLON"
    const g3 = "NONAL"

    expect(markWordleGuess(g1, w1)).toStrictEqual([{ state: "W" }, { state: "W" }, { state: "C" }, { state: "W" }, { state: "W" }]);
    expect(markWordleGuess(g2, w2)).toStrictEqual([{ state: "C" }, { state: "W" }, { state: "C" }, { state: "W" }, { state: "WP" }]);
    expect(markWordleGuess(g3, w3)).toStrictEqual([{ state: "WP" }, { state: "C" }, { state: "W" }, { state: "W" }, { state: "WP" }]);

})