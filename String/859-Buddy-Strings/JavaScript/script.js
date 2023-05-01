// This approach will lead to Time Limit Exceeded with long string
// var buddyStrings = function (s, goal) {
//   let array = s.split("");
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (i === j) {
//         continue;
//       }
//       let temp = array[j];
//       let tempArr = [...array];
//       tempArr[j] = tempArr[i];
//       tempArr[i] = temp;
//       console.log(tempArr.join(""));
//       if (tempArr.join("") === goal) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// O(n)
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    if (s.length !== new Set(s).size) {
      return true;
    }
    return false;
  }

  let diff = [];
  for (let index = 0; index < s.length; index++) {
    if (s[index] !== goal[index]) {
      diff.push(index);
    }
  }

  if (diff.length > 2) {
    return false;
  }
  if (s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]]) {
    return true;
  }

  return false;
};

module.exports = buddyStrings;
