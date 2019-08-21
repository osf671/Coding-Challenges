// Challenge link here: https://edabit.com/challenge/MsNyn2xmTzRWjFuMT
function evenOddTransform(arr, n) {
  // put your code here
  // don't touch anything else
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
const results = setupAndRun(evenOddTransform);
console.log("THE RESULTS: \r\n", ...results.map(r => r.message + "\r\n"));
console.log("DEBUGGING INFO: \r\n", results);
function setupAndRun(func) {
  const tests = [
    {
      input: [[3, 4, 9], 3],
      expectation: [9, -2, 15],
      multiParam: true
    },
    {
      input: [[0, 0, 0], 10],
      expectation: [-20, -20, -20],
      multiParam: true
    },
    {
      input: [[1, 2, 3], 1],
      expectation: [3, 0, 5],
      multiParam: true
    }
  ];

  return tests.map(({ input, expectation, multiParam }) => {
    let functionReturn;
    if (multiParam) {
      functionReturn = func(...input);
    } else {
      functionReturn = func(input);
    }
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