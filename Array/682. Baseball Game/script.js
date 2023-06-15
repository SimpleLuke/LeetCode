/*
 * Calculates the sum of valid points in a game based on a given list of operations.
 * @param {string[]} operations - The list of operations representing points or special actions.
 * @return {number} - Returns the sum of valid points in the game.
 */
var calPoints = function (operations) {
  const record = []; // Array to store the valid points

  for (let string of operations) {
    if (!isNaN(parseInt(string))) {
      record.push(parseInt(string)); // Push valid points to the record array
    } else if (string === "+") {
      record.push(record[record.length - 2] + record[record.length - 1]); // Calculate and push the sum of the last two valid points
    } else if (string === "D") {
      record.push(record[record.length - 1] * 2); // Double the value of the last valid point and push to the record array
    } else if (string === "C") {
      record.pop(); // Remove the last valid point from the record array
    }
  }

  return record.reduce((sum, prev) => sum + prev, 0); // Calculate the sum of all valid points using the reduce function
};

/**
 * Time Complexity: O(N)
 * The function iterates over each operation in the input array once, where N is the length of the array.
 * The operations performed inside the loop, such as pushing, popping, and calculations, are constant-time operations.
 * Therefore, the overall time complexity is O(N).

 * Space Complexity: O(N)
 * The function utilizes an array, `record`, to store the valid points.
 * In the worst case, the size of the `record` array can be equal to the length of the input array.
 * Thus, the space complexity is O(N).

 * Note:
 * - The function calculates the sum of valid points in a game based on the given list of operations.
 * - Valid points are numbers in the operations array, and special actions modify or remove points accordingly.
 * - Returns the sum of valid points in the game.
 */
