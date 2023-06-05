/**
 * Time O(N) | Space O(N)
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let turnAround = 0;

  while (students.length > 0) {
    if (students[0] === sandwiches[0]) {
      students = students.slice(1);
      sandwiches = sandwiches.slice(1);
      turnAround = 0;
    } else {
      students.push(students[0]);
      students = students.slice(1);
      turnAround++;
    }

    if (turnAround === students.length) {
      return turnAround;
    }
  }

  return 0;
};

// This is a bit efficient. Time is O(max(m,n)) and Space is O(1).

var countStudents = function (students, sandwiches) {
  let studentsOne = 0;
  let studentsZero = 0;

  for (let i = 0; i < students.length; i++) {
    if (students[i] === 1) {
      studentsOne++;
    } else {
      studentsZero++;
    }
  }

  for (let i = 0; i < sandwiches.length; i++) {
    if (sandwiches[i] === 1) {
      studentsOne--;
      if (studentsOne < 0) {
        return students.length - i;
      }
    } else {
      studentsZero--;
      if (studentsZero < 0) {
        return students.length - i;
      }
    }
  }

  return 0;
};
