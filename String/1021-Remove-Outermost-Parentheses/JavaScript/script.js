var removeOuterParentheses = function (s) {
  let left = "";
  let right = "";
  let temp = "";
  let result = "";
  for (let index = 0; index < s.length; index++) {
    if (s[index] === "(") {
      left += "(";
    } else if (s[index] === ")") {
      right += ")";
    }

    temp += s[index];

    if (left.length === right.length) {
      result += temp.substring(1, temp.length - 1);
      left = "";
      right = "";
      temp = "";
    }
  }
  return result;
};

module.exports = removeOuterParentheses;
