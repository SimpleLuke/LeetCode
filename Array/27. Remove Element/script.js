/*
 * Removes all occurrences of a specified value from an array in-place.
 * @param {number[]} nums - The input array of numbers.
 * @param {number} val - The value to be removed from the array.
 * @return {number} - Returns the length of the modified array after removing the elements.
 */
var removeElement = function (nums, val) {
  let pointer = 0; // Pointer to track the current position for inserting non-val elements

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i]; // Overwrite the element at the pointer position with the non-val element
      pointer++; // Increment the pointer position
    }
  }

  return pointer; // The pointer value represents the length of the modified array
};

/**
 * Time Complexity: O(N)
 * The function iterates over each element of the input array once, where N is the length of the array.
 * The operations performed inside the loop, such as comparisons and assignments, are constant-time operations.
 * Therefore, the overall time complexity is O(N).

 * Space Complexity: O(1)
 * The function modifies the input array in-place without utilizing any additional data structures.
 * Thus, the space complexity is O(1), indicating a constant amount of space used.

 * Note:
 * - The function removes all occurrences of the specified value from the array in-place.
 * - It returns the length of the modified array after removing the elements.
 * - The original order of the remaining elements is preserved.
 */
