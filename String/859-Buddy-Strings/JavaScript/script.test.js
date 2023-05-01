const buddyStrings = require("./script");

describe("isAnagram", () => {
  it("returns true when given first input can become second input after switching two indeices", () => {
    expect(buddyStrings("ab", "ba")).toEqual(true);
    expect(buddyStrings("abcde", "cbade")).toEqual(true);
  });
});
