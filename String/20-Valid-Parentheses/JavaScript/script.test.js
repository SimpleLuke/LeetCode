const isValid = require("./script");

describe("isValid", () => {
  it("returns true given (),[] or {}", () => {
    expect(isValid("()")).toEqual(true);
    expect(isValid("[]")).toEqual(true);
    expect(isValid("{}")).toEqual(true);
  });

  it("returns false given wrong type", () => {
    expect(isValid("(}")).toEqual(false);
    expect(isValid("[}")).toEqual(false);
  });
});
