/*
 * Time O(N) | Space O(N)
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];
  const check = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  for (let el of s) {
    if (el === "(" || el === "{" || el === "[") {
      stack.push(el);
    } else {
      const last = stack.pop();
      if (check[last] !== el) {
        return false;
      }
    }
  }

  return stack.length !== 0;
};
