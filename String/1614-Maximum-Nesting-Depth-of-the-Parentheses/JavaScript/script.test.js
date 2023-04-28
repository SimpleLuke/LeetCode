const maxDepth = require("./script");

describe("maxDepth", () => {
  it("returns the number of deepest nested paretheses", () => {
    expect(maxDepth("(1)+((2))+(((3)))")).toEqual(3);
    expect(maxDepth("(1)+((2))+((3))")).toEqual(2);
    expect(maxDepth("(1+(2*3)+((8)/4))+1")).toEqual(3);
  });
  it("returns the number of deepest nested paretheses when irregular orders", () => {
    expect(maxDepth("(1+(2*3)+((8)/4))+1")).toEqual(3);
  });
});
