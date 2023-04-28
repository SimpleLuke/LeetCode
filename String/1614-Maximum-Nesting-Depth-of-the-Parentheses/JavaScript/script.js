var maxDepth = function (s) {
  let left = 0;
  let right = 0;
  let count = 0;
  for (let index = 0; index < s.length; index++) {
    if (s[index] === "(") {
      left++;
    } else if (s[index] === ")") {
      right++;
    }

    if (left === right) {
      count = left;
      left = 0;
      right = 0;
    }
  }
  return count;
};

module.exports = maxDepth;
