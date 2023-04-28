const maxDepth = require("./script");

describe("maxDepth", () => {
  it("returns the number of deepest nested paretheses", () => {
    expect(maxDepth("(1)+((2))+(((3)))")).toEqual(3);
    expect(maxDepth("(1)+((2))+((3))")).toEqual(2);
  });
});
