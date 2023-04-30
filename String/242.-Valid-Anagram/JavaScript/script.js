var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const tArray = t.split("");
  for (let index = 0; index < s.length; index++) {
    let i = tArray.indexOf(s[index]);
    if (i > -1) {
      tArray.splice(i, 1);
    }
  }
  if (tArray.length === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = isAnagram;
