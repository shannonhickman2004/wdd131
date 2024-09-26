//Write a for loop that will iterate through the studentReport array and print to the console the current array value if it is below 30.

// for loop
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }

  // while loop
  let i = 0;
  while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
    i++;
  }

  // forEach loop
  studentReport.forEach(function (item) {
    if (item < LIMIT) {
      console.log(item);
    }
  });

  // for...in loop
  for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }