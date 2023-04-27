var removeOuterParentheses = function (s) {
  let left = "";
  let right = "";
  let result = "";
  for (let index = 0; index < s.length; index++) {
    if (s[index] === "(") {
      left += "(";
    } else if (s[index] === ")") {
      right += ")";
    }

    if (left.length === right.length) {
      result +=
        left.substring(0, left.length - 1) +
        right.substring(0, right.length - 1);
      left = "";
      right = "";
    }
  }
  return result;
};

module.exports = removeOuterParentheses;
