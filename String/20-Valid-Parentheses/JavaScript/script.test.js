const isValid = require("./script");

describe("isValid", () => {
  it("returns true given (),[] or {}", () => {
    expect(isValid("()")).toEqual(true);
    expect(isValid("[]")).toEqual(true);
    expect(isValid("{}")).toEqual(true);
    expect(isValid("(}")).toEqual(false);
  });
});
