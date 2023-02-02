import sumNestedArrays from "./sumNestedArrays";

const input001 = [10, [2, 3, 6], [1, [100, [3, 4], 5]]];

const input002 = [2];


test("Sums all of the elements within a nested array", () => {

    expect(sumNestedArrays(input001)).toBe(134);

}
)