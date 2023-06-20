/**
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 * @param {number[]} students - Array representing the preferences of students (1s and 0s)
 * @param {number[]} sandwiches - Array representing the available sandwiches (1s and 0s)
 * @return {number} - The number of students who couldn't get their preferred sandwiches
 */
var countStudents = function (students, sandwiches) {
  let turnAround = 0; // Counter for the number of students who couldn't get their preferred sandwiches

  while (students.length > 0) {
    if (students[0] === sandwiches[0]) {
      // If the student's preference matches the available sandwich
      students = students.slice(1); // Remove the student from the list
      sandwiches = sandwiches.slice(1); // Remove the sandwich from the list
      turnAround = 0; // Reset the turnAround counter
    } else {
      students.push(students[0]); // Move the student to the end of the list
      students = students.slice(1); // Remove the student from the beginning of the list
      turnAround++; // Increment the turnAround counter
    }

    if (turnAround === students.length) {
      // If all remaining students have already been moved to the end
      return turnAround; // Return the number of students who couldn't get their preferred sandwiches
    }
  }

  return 0; // If all students got their preferred sandwiches, return 0
};

/**
 * This alternative approach is a bit more efficient.
 * Time Complexity: O(max(m, n))
 * Space Complexity: O(1)
 * @param {number[]} students - Array representing the preferences of students (1s and 0s)
 * @param {number[]} sandwiches - Array representing the available sandwiches (1s and 0s)
 * @return {number} - The number of students who couldn't get their preferred sandwiches
 */
var countStudents = function (students, sandwiches) {
  let studentsOne = 0; // Counter for the number of students preferring sandwich type 1
  let studentsZero = 0; // Counter for the number of students preferring sandwich type 0

  // Count the number of students preferring each type of sandwich
  for (let i = 0; i < students.length; i++) {
    if (students[i] === 1) {
      studentsOne++;
    } else {
      studentsZero++;
    }
  }

  // Iterate over the sandwiches and check if each student gets their preferred sandwich
  for (let i = 0; i < sandwiches.length; i++) {
    if (sandwiches[i] === 1) {
      studentsOne--; // Decrease the count of students preferring sandwich type 1
      if (studentsOne < 0) {
        // If there are no more students preferring sandwich type 1
        return students.length - i; // Return the remaining number of students who couldn't get their preferred sandwiches
      }
    } else {
      studentsZero--; // Decrease the count of students preferring sandwich type 0
      if (studentsZero < 0) {
        // If there are no more students preferring sandwich type 0
        return students.length - i; // Return the remaining number of students who couldn't get their preferred sandwiches
      }
    }
  }

  return 0; // If all students got their preferred sandwiches, return 0
};
