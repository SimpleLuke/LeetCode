const buddyStrings = require("./script");

describe("isAnagram", () => {
  it("returns true when given first input can become second input after switching two indices", () => {
    expect(buddyStrings("ab", "ba")).toEqual(true);
    expect(buddyStrings("abcde", "cbade")).toEqual(true);
  });
  it("returns false when given first input cannot become second input after switching two indices", () => {
    expect(buddyStrings("ab", "ab")).toEqual(false);
  });
});
