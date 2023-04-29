var isIsomorphic = function (s, t) {
  const sArr = Array.from(new Set(s.split("")));
  const tArr = Array.from(new Set(t.split("")));
  if (sArr.length !== tArr.length) {
    return false;
  }
  const map = {};
  for (let index = 0; index < s.length; index++) {
    if (s[index] in map === false) {
      map[s[index]] = t[index];
    } else {
      if (map[s[index]] !== t[index]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = isIsomorphic;
