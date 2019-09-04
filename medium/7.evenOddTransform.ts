// Challenge link here: https://edabit.com/challenge/MsNyn2xmTzRWjFuMT
function evenOddTransform(arr, n) {
  // create newArray
  // for loop 
  // loop over n times
  // create newNum
  // loop within that over arr
  // create curNum 
  // determine whether or not its even or odd (module)
  // if so subtract curNum by 2
  // then newNum += curNum
  // if not add 2 to curNum
  // then newNum +=curNum
  // push newNum into newArray

  for (var x = 0; x < n; x++) {
    for (var y = 0; y < arr.length; y++) {
      var curNum = arr[y];
      if (curNum % 2 == 0) {
        arr[y] = curNum - 2;
      } else {
        arr[y] = curNum + 2;
      }
    }
  }
return arr;
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
    const passed = functionReturn == expectation;
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
