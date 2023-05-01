var buddyStrings = function (s, goal) {
  let array = s.split("");
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i === j) {
        continue;
      }
      let temp = array[j];
      let tempArr = [...array];
      tempArr[j] = tempArr[i];
      tempArr[i] = temp;
      console.log(tempArr.join(""));
      if (tempArr.join("") === goal) {
        return true;
      }
    }
  }
  return false;
};

module.exports = buddyStrings;
