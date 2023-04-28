var maxDepth = function (s) {
  let count = 0;
  let maxCount = 0;
  for (let index = 0; index < s.length; index++) {
    if (s[index] === "(") {
      count++;
    } else if (s[index] === ")") {
      count--;
    }

    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
};

module.exports = maxDepth;
