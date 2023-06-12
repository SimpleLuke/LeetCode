/**
 * Finds and returns the indices of two numbers in an array that sum up to a target value.
 * @param {number[]} nums - The input array of numbers.
 * @param {number} target - The target value to find the sum of two numbers.
 * @return {number[]} - An array containing the indices of the two numbers that sum up to the target.
 */
var twoSum = function (nums, target) {
  // Create a hashmap to store the numbers and their corresponding indices
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    // Check if the complement of the current number exists in the hashmap
    if (target - nums[i] in map) {
      // Return the indices of the two numbers that sum up to the target
      return [i, map[target - nums[i]]];
    }

    // Add the current number to the hashmap with its index
    map[nums[i]] = i;
  }
};

/**
 * Time Complexity:
 * The function iterates over the input array `nums` once, performing constant-time operations for each element.
 * The hashmap lookup operation inside the loop has an average time complexity of O(1).
 * Therefore, the overall time complexity is O(n), where n is the length of the input array.
 *
 * Space Complexity:
 * The function utilizes a hashmap to store the numbers and their indices, which can have up to n key-value pairs in the worst case.
 * Thus, the space complexity of the hashmap is O(n).
 * Additionally, the function returns an array of two indices, which requires O(1) space.
 * Therefore, the overall space complexity is O(n).
 *
 * Note:
 * - The function assumes that there exists exactly one solution, and the same element cannot be used twice.
 * - It returns an array containing the indices of the two numbers that sum up to the target.
 * - If no solution is found, the function does not return anything.
 */
