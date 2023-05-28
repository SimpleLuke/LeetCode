/*
 * Time O(N) | Space O(N)
 * @param {number[]} nums
 * @return {number[]}
 */

// With JavaScript built-in method, it is an easy and clean solution. It beats 97.65% in time and 85.52% memory.
var getConcatenation = function (nums) {
  return nums.concat(nums);
};

// Here is another solution, which is more extentable but less efficient, you can change the iterate time from 2 to x for more iteration.
// It beats 64.37% in time and 49.96% memory.
var getConcatenation = function (nums) {
  let ans = [];

  for (let i = 0; i < 2; i++) {
    nums.forEach((num) => ans.push(num));
  }

  return ans;
};
