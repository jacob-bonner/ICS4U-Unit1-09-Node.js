// Created By: Jacob Bonner
// Created On: December 2020
// This program takes a list of student marks and
//   calculates the class average for the user.

// This function calculates the average from an array of student marks
function findClassAverage(classMarks) {
  // Looping through the array to find the sum of all marks
  let totalMark = 0;
  for (let studentCounter = 0; studentCounter < classMarks.length; 
       studentCounter++) {
    for (let markCounter = 0; markCounter < classMarks[studentCounter].length;
         markCounter++) {
           totalMark += classMarks[studentCounter][markCounter];
    }
  }

  // Dividing the sum of the marks by the array length
  const AVERAGEFLOAT = totalMark / (classMarks.length * classMarks[0].length);
  const AVERAGE = AVERAGEFLOAT.toFixed(0);

  // Returning the minimum number
  return AVERAGE;
}

// Initializing the array containing the student marks
const STUDENTMARKS = new Array(4);

// Converting the 1D array into a 2D array
for (let arrayCounter = 0; arrayCounter < 4; arrayCounter++) {
  STUDENTMARKS[arrayCounter] = new Array(6);
}

// Generating the student marks and adding them to the array
for (let firstCounter = 0; firstCounter < 4; firstCounter++) {
  let marks  = '';
  console.log("Student " + (firstCounter + 1) + ":");
  for (let secondCounter = 0; secondCounter < 6; secondCounter++) {
    let randomNumber = Math.floor(Math.random() * ((99 - 1)) + 1) + 1;
    STUDENTMARKS[firstCounter][secondCounter] = randomNumber;
    marks = marks + STUDENTMARKS[firstCounter][secondCounter] + ', ';
  }
  console.log(marks);
  console.log();
}

// Process
const CLASSAVERAGE = findClassAverage(STUDENTMARKS);

// Output
console.log("Class Average:", CLASSAVERAGE + "%");
