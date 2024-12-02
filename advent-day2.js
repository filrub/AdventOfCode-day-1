//requiring path and fs modules
const fs = require("fs");

fs.readFile("list-day2.txt", function (err, data) {
  if (err) throw err;
  var array = data.toString().split("\n");
  let safeReportsCount = 0;

  for (i in array) {
    let row = array[i].split(" ");

    if (isSafe(row)) {
      safeReportsCount++;
    } else {
      for (index = 0; index < row.length; index++) {
        const halfBeforeTheUnwantedElement = row.slice(0, index);

        const halfAfterTheUnwantedElement = row.slice(index + 1);

        const copyWithoutThirdElement = halfBeforeTheUnwantedElement.concat(
          halfAfterTheUnwantedElement
        );
        if (isSafe(copyWithoutThirdElement)) {
          safeReportsCount++;
          break;
        }
      }
    }
  }

  console.log("SAFE REPORTS COUNT:", safeReportsCount);
});

function isSafe(arr) {
  let tempRow1 = arr.slice(0);
  let tempRow2 = arr.slice(0);
  let isSorted = false;
  let differ = true;

  //ordino array in modo ascendente
  tempRow1.sort(function (a, b) {
    return a - b;
  });

  tempRow2
    .sort(function (a, b) {
      return a - b;
    })
    .reverse();

  if (
    JSON.stringify(arr) == JSON.stringify(tempRow1) ||
    JSON.stringify(arr) == JSON.stringify(tempRow2)
  ) {
    isSorted = true;
  }

  for (j = 0; j < arr.length - 1; j++) {
    if (
      Math.abs(arr[j + 1] - arr[j]) > 3 ||
      Math.abs(arr[j + 1] - arr[j]) < 1
    ) {
      differ = false;
    }
  }

  if (isSorted && differ) {
    return true;
  } else {
    return false;
  }
}
