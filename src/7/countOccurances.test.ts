import countOccurances from "./countOccurances";

test("counts occurances in string", () => {
    expect(1).toBe(1);
    expect(countOccurances('h')).toEqual({'h':1});
});
