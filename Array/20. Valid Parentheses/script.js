/*
 * Determines whether a string containing parentheses, brackets, and curly braces is valid.
 * The string is valid if all opening brackets are closed in the correct order.
 * @param {string} s - The input string to be validated.
 * @return {boolean} - Returns true if the string is valid, false otherwise.
 */
const isValid = function (s) {
  const stack = []; // Stack to store opening brackets
  const check = {
    // Object mapping opening brackets to their corresponding closing brackets
    "{": "}",
    "(": ")",
    "[": "]",
  };

  for (let el of s) {
    if (el === "(" || el === "{" || el === "[") {
      stack.push(el); // Push opening brackets to the stack
    } else {
      const last = stack.pop(); // Retrieve the last opening bracket from the stack
      if (check[last] !== el) {
        // Check if the corresponding closing bracket matches
        return false; // If not matching, return false
      }
    }
  }

  return stack.length === 0; // The string is valid if the stack is empty at the end
};

/**
   * Time Complexity: O(N)
   * The function iterates over each character of the input string once, where N is the length of the string.
   * The operations performed inside the loop, such as pushing and popping elements from the stack, are constant-time operations.
   * Therefore, the overall time complexity is O(N).
  
   * Space Complexity: O(N)
   * In the worst case, the stack can store all opening brackets of the input string, resulting in a space complexity of O(N).
   * Additionally, the function utilizes a constant amount of space for the check object.
   * Therefore, the overall space complexity is O(N).
  
   * Note:
   * - The function assumes that the input string only contains parentheses, brackets, and curly braces.
   * - It checks the validity of the string by ensuring that all opening brackets are closed in the correct order.
   * - Returns true if the string is valid and false otherwise.
   */
