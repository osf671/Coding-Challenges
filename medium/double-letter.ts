// Challenge link here: https://edabit.com/challenge/YHLaB8itA9tEDN5TG
function doubleLetters(word) {
  var previousLetter;
  var doubleLetterExists= false;
  for (var i = 0; i < word.length; i++) {
    var curLetter = word[i];
    if (previousLetter && previousLetter == curLetter) {
      doubleLetterExists= true;
    }
    previousLetter = curLetter
  }
  console.log(doubleLetterExists)
}

console.log(setupAndRun(doubleLetters).map(r => r.message));
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
function setupAndRun(func) {
  const tests = [
    {
      input: "loop",
      expectation: true
    },
    {
      input: "yummy",
      expectation: true
    },
    {
      input: "orange",
      expectation: false
    },
    {
      input: "munchkin",
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
