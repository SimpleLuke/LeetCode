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

// Alternative way using JavaScript indexOf method to search and compare next character map.
// This approach minimises space complexity by not using data structures
// var isIsomorphic = function(s, t) {

//     for (let i = 0; i < s.length; i++) {

//         if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {

//             return false;
//         }
//     }
//     return true;
// };

module.exports = isIsomorphic;
