var twoSum = function (nums, target) {
  // Check the inputs
  if (nums.length === 0 || typeof target !== "number") {
    return "Opps, something wrong with the inputs.";
  }

  // Compare the first index to the follow up indices.
  // If the answer didn't come up, it used the second index to compare the rest of the array and so on.
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; i++) {
      console.log(i, j);
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([3, 3], 6));
