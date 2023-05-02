var sortString = function (s) {
  // Create a hashmap object to store the count of each character in the input string
  const hashmap = {};
  // Initialize an empty output string
  let output = "";

  // Iterate through the input string
  for (let i = 0; i < s.length; i++) {
    // Get the character code for each character in the string
    const code = s.charCodeAt(i);
    // If the character is not in the hashmap, add it with a count of 1
    if (!hashmap[code]) {
      hashmap[code] = 1;
      // If the character is already in the hashmap, increment its count
    } else {
      hashmap[code]++;
    }
  }

  // Convert the hashmap to an array of key-value pairs
  const temp = Object.entries(hashmap);
  // Initialize a cursor to keep track of the current index in the array, and a direction flag to indicate whether to move forward or backward
  let cursor = 0;
  let direction = 1;

  // While the output string is shorter than the input string and there are still characters to add
  while (output.length < s.length && temp.length) {
    // Append the character corresponding to the current index in the array to the output string
    output += String.fromCharCode(temp[cursor][0]);
    // If the character has a count greater than 1, decrement the count
    if (temp[cursor][1] > 1) {
      temp[cursor][1]--;
      // If the character has a count of 1, remove it from the array and adjust the cursor position accordingly
    } else {
      temp.splice(cursor, 1);
      cursor = cursor + (direction === 1 ? -1 : 0);
    }
    // Move the cursor in the current direction
    cursor += direction;
    // If the cursor has reached the beginning or end of the array, change the direction and move the cursor accordingly
    if (cursor === -1 || cursor === temp.length) {
      direction = -direction;
      cursor += direction;
    }
  }

  // Return the sorted output string
  return output;
};

module.exports = sortString;
