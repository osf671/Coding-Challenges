// Challenge link here: https://edabit.com/challenge/MsNyn2xmTzRWjFuMT
function evenOddTransform(arr, n) {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    if (arr[i] % 2 === 0) {
      let numberMinus = currentNumber - 2 * n;
      finalArr.push(numberMinus);
    } else if (arr[i] % 2 !== 0) {
      let numberPlus = currentNumber + 2 * n;
      finalArr.push(numberPlus);
    }
  }
  return finalArr;
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
const res = setupAndRun(evenOddTransform);
console.log("THE RESULTS: \r\n", ...res.map(r => r.message + "\r\n"));
console.log("DEBUGGING INFO: \r\n", res);
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
