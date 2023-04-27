const removeOuterParentheses = require("./script");

describe("removeOuterParetheses", () => {
  it("returns empty string when given one pair of outer parentheses with primitive decomposition", () => {
    expect(removeOuterParentheses("()")).toEqual("");
    expect(removeOuterParentheses("()()")).toEqual("");
  });
  it("removes the outer parentheses when given wrapping parentheses with primitive decomposition", () => {
    expect(removeOuterParentheses("(())")).toEqual("()");
    expect(removeOuterParentheses("((()))")).toEqual("(())");
  });
  it("removes the respective outer parentheses when given wrapping parentheses with multiple primitive decompositions", () => {
    expect(removeOuterParentheses("(()())(())(()(()))")).toEqual(
      "()()()()(())"
    );
    expect(removeOuterParentheses("(()())(())")).toEqual("()()()");
  });
});
