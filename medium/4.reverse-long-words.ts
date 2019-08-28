// Challenge link here: https://edabit.com/challenge/wPNzJEJebN2mewcqY
function reverse(str) {
  const wordArray = str.split(' ');
  var finalArray = [];


  for (var i = 0; i < wordArray.length; i++) {
    var curWord = wordArray[i];

    if (curWord.length >= 5) {
      var newWord = '';

      for (var x = 0; x < curWord.length; x++) {
        var curChar = curWord[x];
        newWord = curChar + newWord;
      }
      finalArray.push(newWord)
    } else {
      finalArray.push(curWord)
    }
  }
  return finalArray.join(' ')
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
const res = setupAndRun(reverse);
console.log("THE RESULTS: \r\n", ...res.map(r => r.message + "\r\n"));
console.log("DEBUGGING INFO: \r\n", res);
function setupAndRun(func) {
  const tests = [
    {
      input: "Reverse",
      expectation: "esreveR"
    },
    {
      input: "This is a typical sentence.",
      expectation: "This is a lacipyt .ecnetnes"
    },
    {
      input: "The dog is big.",
      expectation: "The dog is big."
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
