/**
 * Converts a Roman numeral string to an integer.
 * @param {string} s - The input Roman numeral string.
 * @return {number} - The converted integer.
 */
var romanToInt = function (s) {
  // Define an object that maps Roman symbols to their corresponding integer values.
  const romanSym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Initialize a variable to store the final sum of the Roman numerals.
  let sum = 0;

  // Initialize a variable to keep track of the previous Roman numeral's integer value.
  let prev = romanSym[s[0]];

  // Split the input Roman numeral string into an array of characters, map each character to its corresponding integer value,
  // and then iterate through the array to calculate the sum of the integers while considering subtraction cases.
  s.split("")
    .map((el) => romanSym[el])
    .forEach((el) => {
      // If the current integer value is greater than the previous one, it means subtraction is involved.
      // So, we subtract twice the previous value from the current value and add it to the sum.
      if (el > prev) {
        sum += el - prev * 2;
      } else {
        // Otherwise, simply add the current value to the sum.
        sum += el;
      }
      // Update the previous value for the next iteration.
      prev = el;
    });

  // Return the final sum of the Roman numerals as an integer.
  return sum;
};
