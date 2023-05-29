/*
 * Time O(N) | Space O(N)
 * @param {number[]} nums
 * @return {number[]}
 */
var calPoints = function (operations) {
  const record = [];

  for (let string of operations) {
    if (!isNaN(parseInt(string))) {
      record.push(parseInt(string));
    } else if (string === "+") {
      record.push(record[record.length - 2] + record[record.length - 1]);
    } else if (string === "D") {
      record.push(record[record.length - 1] * 2);
    } else if (string === "C") {
      record.pop();
    }
  }

  return record.reduce((sum, prev) => sum + prev, 0);
};
