// Challenge link here: https://edabit.com/challenge/3HPSLLjh8Go5QPq3C
function greatestCommonDenominator(int1, int2) {
  let factorArr = [];
  let GCD;
  let minOfTwo = findSmallerNum(int2, int2);
  for (let factor = 1; factor <= minOfTwo; factor++) {
    if (int1 % factor === 0 && int2 % factor === 0) {
      factorArr.push(factor);
    }
  }
  GCD = factorArr[factorArr.length - 1];
  return GCD;
}

function findSmallerNum(number1, number2) {
  if (number1 < number2) {
    return number1;
  }
  return number2;
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
const results = setupAndRun(greatestCommonDenominator);
console.log("THE RESULTS: \r\n", ...results.map(r => r.message + "\r\n"));
console.log("DEBUGGING INFO: \r\n", results);
function setupAndRun(func) {
  const tests = [
    {
      input: [32, 8],
      expectation: 8
    },
    {
      input: [8, 12],
      expectation: 4
    },
    {
      input: [17, 13],
      expectation: 1
    },
    {
      input: 9086,
      expectation: 14
    }
  ];

  return tests.map(({ input, expectation }) => {
    const functionReturn = func(input[0], input[1]);
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
