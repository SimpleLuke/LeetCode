const isValid = function (s) {
  if (s === "()" || s === "[]" || s === "{}") {
    return true;
  }
  return false;
};

module.exports = isValid;
