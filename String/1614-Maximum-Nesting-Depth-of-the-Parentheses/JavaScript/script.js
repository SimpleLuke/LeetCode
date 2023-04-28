var maxDepth = function (s) {
  let stack = [];
  let maxCount = 0;
  for (let index = 0; index < s.length; index++) {
    if (s[index] === "(") {
      stack.push("(");
    } else if (s[index] === ")") {
      stack.pop();
    }

    if (stack.length > maxCount) {
      maxCount = stack.length;
    }
  }
  return maxCount;
};

module.exports = maxDepth;
