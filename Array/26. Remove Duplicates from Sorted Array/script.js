/*
 * Linear
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */

/*
Since the problem requires modify the original array,
I set a pointer(nextIndex) to track the index to write the new unique number.
When I loop through the non-decreasing order array, I compare the value with previous index, 
if it is not equal, it means a unique number is found.
I increment the nextIndex everytime I find a new unique number.
 */

var removeDuplicates = function (nums) {
  let nextIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[nextIndex] = nums[i];
      nextIndex++;
    }
  }

  return nextIndex;
};
