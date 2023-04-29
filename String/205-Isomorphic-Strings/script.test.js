const isIsomorphic = require("./script");

describe("isIsomorphic", () => {
  it("returns true when given the characters of first word can be replaced to get second word", () => {
    expect(isIsomorphic("egg", "add")).toEqual(true);
    expect(isIsomorphic("paper", "title")).toEqual(true);
  });
  it("returns false when given the characters of first word cannot be replaced to get second word", () => {
    expect(isIsomorphic("foo", "bar")).toEqual(false);
  });
  it("returns false when more than one character map to the same character", () => {
    expect(isIsomorphic("badc", "baba")).toEqual(false);
  });
});
