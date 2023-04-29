const isIsomorphic = require("./script");

describe("isIsomorphic", () => {
  it("returns true when given the characters of first word can be replaced to get second word", () => {
    expect(isIsomorphic("egg", "add")).toEqual(true);
    expect(isIsomorphic("paper", "title")).toEqual(true);
  });
});
