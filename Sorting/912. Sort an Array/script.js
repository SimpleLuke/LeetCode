/**
 * Sorts an array of numbers in ascending order using the insertion sort algorithm.
 * In best case when the array is already sorted, the while loop is not executed, and the time complexity becomes O(n).
 * However, the time complexity is determined by the worst-case scenario, giving a time complexity of O(n^2).
 * Space complexity is O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;

    // Move elements of nums[0..i-1], that are greater than nums[i], one position ahead of their current position.
    while (j >= 0 && nums[j] > nums[j + 1]) {
      let temp = nums[j + 1];
      nums[j + 1] = nums[j];
      nums[j] = temp;

      j--;
    }
  }

  return nums;
};
