const isValid = function (s) {
  const validBrackets = ["()", "[]", "{}"];
  let stack = [];
  for (let index = 0; index < s.length; index++) {
    stack.push(s[index]);
    if (index > 0 && stack.length > 1) {
      let checkBrackets = stack[stack.length - 2] + stack[stack.length - 1];
      if (validBrackets.includes(checkBrackets)) {
        stack.pop();
        stack.pop();
      }
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
};

module.exports = isValid;
