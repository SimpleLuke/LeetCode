/**
 * Find the kth largest element in an unsorted array using the QuickSelect algorithm.
 * Time complexity on average is O(n), however worst case would be O(n^2)
 * Space complexity is O(1)
 * @param {number[]} nums - The input array of numbers.
 * @param {number} k - The index of the kth largest element (1-based index).
 * @returns {number} - The kth largest element.
 */
var findKthLargest = function (nums, k) {
  // Convert k to the corresponding index in a zero-based array
  k = nums.length - k;

  /**
   * Recursively perform QuickSelect to find the kth largest element.
   * @param {number} s - The start index of the segment.
   * @param {number} e - The end index of the segment.
   * @returns {number} - The kth largest element.
   */
  function quickSelect(s, e) {
    let pivot = nums[e];
    let left = s;

    for (let i = s; i < e; i++) {
      if (nums[i] < pivot) {
        let temp = nums[left];
        nums[left] = nums[i];
        nums[i] = temp;
        left++;
      }
    }

    nums[e] = nums[left];
    nums[left] = pivot;

    if (left === k) {
      return nums[left];
    } else if (left > k) {
      return quickSelect(s, left - 1);
    } else {
      return quickSelect(left + 1, e);
    }
  }

  // Start the QuickSelect algorithm to find the kth largest element
  return quickSelect(0, nums.length - 1);
};
