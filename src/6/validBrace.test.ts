import validBraces from "./validBraces";

test("Do the braces input in the order presented create a valid series", () => {
    const brackets01 = "()))";
    const brackets02 = "()";
    const brackets03 = "[]";
    const brackets04 = "{}";
    const brackets05 = "(){}[]";
    const brackets06 = "({})[({})]";
    const brackets07 = "())({}}{()][][";
    const brackets08 = "(((({{";
    const brackets09 = "}}]]))}])";
    const brackets10 = "";
    const brackets11 = "Hello world";


    expect(validBraces(brackets01)).toEqual(false);
    expect(validBraces(brackets02)).toEqual(true);
    expect(validBraces(brackets03)).toEqual(true);
    expect(validBraces(brackets04)).toEqual(true);
    expect(validBraces(brackets05)).toEqual(true);
    expect(validBraces(brackets06)).toEqual(true);
    expect(validBraces(brackets07)).toEqual(false);
    expect(validBraces(brackets08)).toEqual(false);
    expect(validBraces(brackets09)).toEqual(false);
    expect(validBraces(brackets10)).toEqual(true);
    expect(validBraces(brackets11)).toEqual(true);

}
);