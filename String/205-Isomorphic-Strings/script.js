var isIsomorphic = function (s, t) {
  const map = {};
  for (let index = 0; index < s.length; index++) {
    console.log(map, s[index]);
    console.log("check", s[index] in map, map[s[index]], t[index]);
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
