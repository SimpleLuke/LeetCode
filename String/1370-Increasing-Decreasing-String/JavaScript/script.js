var sortString = function (s) {
  const array = s.split("");

  return array.sort((a, b) => (a > b ? 1 : -1)).join("");
};

module.exports = sortString;
