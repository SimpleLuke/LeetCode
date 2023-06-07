/**
 * @param {number} n
 * @return {number}
 */
// Recursive implementation to calculate the n-th Fibonacci number
// Two branches => Time complexity is O(2^n); Space complexity is O(n)
var fib = function (n) {
  // Base case: n = 0 or 1
  if (n <= 1) {
    return n;
  }

  // Recursive case: fib(n) = fib(n - 1) + fib(n - 2)
  return fib(n - 1) + fib(n - 2);
};
