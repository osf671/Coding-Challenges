// Challenge link here: https://edabit.com/challenge/rJPgai5r5XdXeQmLg
// function isIsogram(str) {
//   let sameCase = str.toLowerCase();
//   let strArray = sameCase.split("");
//   let sorted = strArray.sort();
//   for (let i = 0; i < str.length; i++) {
//     let currentChar = sorted[i];
//     let nextChar = sorted[i + 1];
//     if (i + 1 < str.length && currentChar === nextChar) {
//       return false;
//     }
//   }
//   return true;
// }

// Solutoion 2 Not good
// function isIsogram(str) {
//   return str.toLowerCase()
//   .split('')
//   .sort()
//   .reduce(function(acc, char, i, arr) { 
//     if (acc === true && char !== arr[i-1]) {
//       return true;
//     } return false; }, true)
// }

// Solution 3
function isIsogram(str) {
  return str.toLowerCase()
    .split('')
    .sort()
    .filter((item, index, arr) => item !== arr[index-1])
    .length === str.length
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const res = setupAndRun(isIsogram);
console.log("THE RESULTS:\r\n", ...res.map(r => r.message + "\r\n"));
console.log("DEBUGGING INFO:\r\n", res);
function setupAndRun(func) {
  const tests = [
    {
      input: "Algorism",
      expectation: true
    },
    {
      input: "PasSword",
      expectation: false
    },
    {
      input: "Consecutive",
      expectation: false
    }
  ];

  return tests.map(({ input, expectation }) => {
    const functionReturn = func(input);
    const passed = functionReturn === expectation;
    const message =
      input + (passed ? ": THE TEST PASSED" : ": THE TEST FAILED");
    return {
      input,
      expectation,
      functionReturn,
      passed,
      message
    };
  });
}
