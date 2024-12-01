//requiring path and fs modules
const fs = require("fs");

const frequency = (arr, item) => {
  return arr.reduce((count, x) => (x === item ? count + 1 : count), 0);
};

fs.readFile("list.txt", function (err, data) {
  if (err) throw err;
  var array = data.toString().split("\n");

  let col1 = [];
  let col2 = [];
  let diff = 0;
  let similarity = 0;

  for (i in array) {
    col1.push(array[i].split("   ")[0]);
    col2.push(array[i].split("   ")[1]);
  }

  col1.sort(function (a, b) {
    return a - b;
  });
  col2.sort(function (a, b) {
    return a - b;
  });

  for (i in col1) {
    diff = diff + Math.abs(col2[i] - col1[i]);
    similarity = similarity + col1[i] * frequency(col2, col1[i]);
    /* console.log(
      "i:",
      i,
      "col1:",
      col1[i],
      "col2",
      col2[i],
      "col2 - col1:",
      col2[i] - col1[i],
      "diff:",
      diff
    ); */
  }

  console.log("TOTAL DIFF:", diff, "similarity:", similarity);
});
