// Challenge link here: https://edabit.com/challenge/LvtsCQNpx7CwHGubf
function makeTitle(str: string) {
  const wordArray = str.split(' ')
  console.log(wordArray)

  var finalArray = [];

  for (var x = 0; x < wordArray.length; x++) {
    var curWord = wordArray[x];
    console.log(curWord)

    var firstLetter = curWord[0];
    console.log(firstLetter)

    var capitalLetter = firstLetter.toUpperCase()
    console.log(capitalLetter)

    finalArray.push(curWord.replace(curWord[0], capitalLetter))
    
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
const res = setupAndRun(makeTitle);
console.log("THE RESULTS: \r\n", ...res.map(r => r.message + "\r\n"));
console.log("DEBUGGING INFO: \r\n", res);
function setupAndRun(func) {
  const tests = [
    {
      input: "This is a title",
      expectation: "This Is A Title"
    },
    {
      input: "capitalize every word",
      expectation: "Capitalize Every Word"
    },
    {
      input: "I Like Pizza",
      expectation: "I Like Pizza"
    },
    {
      input: "PIZZA PIZZA PIZZA",
      expectation: "PIZZA PIZZA PIZZA"
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
