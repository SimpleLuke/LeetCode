const removeOuterParentheses = require("./script");

describe("removeOuterParetheses", () => {
  it("returns empty string when given one pair of outer parentheses with primitive decomposition", () => {
    expect(removeOuterParentheses("()")).toEqual("");
    expect(removeOuterParentheses("()()")).toEqual("");
  });
});
