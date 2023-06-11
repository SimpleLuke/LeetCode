/**
 * Sorts an array of colors represented by numbers in-place using the counting sort algorithm.
 * The array contains only the values 0, 1, and 2, representing the colors red, white, and blue, respectively.
 * @param {number[]} nums - The array of colors to be sorted.
 * @return {void} - The function does not return anything, as it modifies the input array in-place.
 */
var sortColors = function (nums) {
  // Create an array to store the counts of each color
  const count = [0, 0, 0];

  // Count the occurrences of each color in the input array
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] += 1;
  }

  let i = 0;
  // Reconstruct the sorted array based on the color counts
  for (let j = 0; j < count.length; j++) {
    for (let k = 0; k < count[j]; k++) {
      nums[i] = j;
      i++;
    }
  }

  // Note: The function does not return anything, as it modifies the input array in-place
};

/**
 * Time Complexity:
 * The algorithm iterates over the input array twice. The first loop counts the occurrences of each color, which takes O(n) time,
 * where n is the length of the input array. The second loop reconstructs the sorted array based on the color counts, which also
 * takes O(n) time. Therefore, the overall time complexity is O(n).
 *
 * Space Complexity:
 * The algorithm utilizes an additional array of constant size, `count`, to store the color counts. Thus, the space complexity is O(1),
 * indicating a constant amount of space.
 *
 * Note:
 * The function modifies the input array `nums` in-place to sort the colors.
 * It does not return a new array.
 * The input array should contain only the values 0, 1, and 2, representing the colors red, white, and blue, respectively.
 */
