const isAnagram = require("./script");

describe("isAnagram", () => {
  it("returns true given two words are anagram", () => {
    expect(isAnagram("anagram", "nagaram")).toEqual(true);
    expect(isAnagram("ten", "net")).toEqual(true);
  });
  it("returns false given two words are not anagram", () => {
    expect(isAnagram("rat", "cat")).toEqual(false);
  });
  it("returns false given different word length", () => {
    expect(isAnagram("rat", "at")).toEqual(false);
  });
});
