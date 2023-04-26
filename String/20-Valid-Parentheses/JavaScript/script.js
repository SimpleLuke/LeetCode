const isValid = function (s) {
  const validBrackets = ["()", "[]", "{}"];
  let pair = "";
  for (let index = 0; index < s.length; index++) {
    pair += s[index];
    if (index % 2 !== 0) {
      if (!validBrackets.includes(pair)) {
        return false;
      }
      pair = "";
    }
  }
  return true;
};

module.exports = isValid;
