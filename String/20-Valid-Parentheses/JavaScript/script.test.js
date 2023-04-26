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

  it("returns true given correct closing type and more than one pair of brackets ", () => {
    expect(isValid("()[]")).toEqual(true);
    expect(isValid("[]{}()")).toEqual(true);
  });

  it("returns false given wrong closing type and more than one pair of brackets ", () => {
    expect(isValid("(]{)")).toEqual(false);
    expect(isValid("[}()")).toEqual(false);
  });

  it("returns true when given correct pair of brackets even not in order", () => {
    expect(isValid("{[]}")).toEqual(true);
  });
});
