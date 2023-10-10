// Remember, we're gonna use strict mode in all scripts now!
"use strict";
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// find max number from an array
// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (temps[i] > max) max = temps[i];
//   }
//   console.log(max);
// };
// calcTempAmplitude([3, 7, 4]);

// find max, min number from an array
// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     // console.log(typeof curTemp);
//     if (typeof curTemp !== "number") continue; // untuk melewati value string didalam array

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
// };
// calcTempAmplitude([3, 7, 4, 1]);
// calcTempAmplitude(temperatures);

// find max, min number from two arrays
const calcTempAmplitude = function (array1, array2) {
  const temps = array1.concat(array2); // merge two arrays
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    // console.log(typeof curTemp);
    if (typeof curTemp !== "number") continue; // untuk melewati value tring didalam array

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
};
// calcTempAmplitude([3, 7, 4, 1]);
calcTempAmplitude([3, 5, 1], [9, 0, 5]);
