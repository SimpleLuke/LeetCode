const sortString = require("./script");

describe("sortString", () => {
  it("returns the same string when given one character", () => {
    expect(sortString("a")).toEqual("a");
  });
  it("returns the sorted string from small to large when given no repeat characters", () => {
    expect(sortString("rat")).toEqual("art");
    expect(sortString("ate")).toEqual("aet");
  });
});
