// Challenge link here: https://edabit.com/challenge/X4WDm4ZroqPZpiqgA
// function unstretch(word) {
//     let firstChar = word[0]
//     let newWord = firstChar + '';
//     // let newWord = '';
//     for (let i = 1; i < word.length; i++) {
//       let currentChar = word[i];
//       let nextChar = word[i-1];
//       // if (i == 0 || nextChar !== currentChar)
//       if (currentChar !== nextChar) {
//         newWord += currentChar
//       }
//     } return newWord;
//   }
// function unstretch(word) {
//   let newWord = '';
//   let nextChar;
//   for (let i = 0; i < word.length; i++) {
//     let currentChar = word[i];
//     let nextChar = word[i-1];
//     if (!nextChar || nextChar !== currentChar) {
//       newWord += currentChar
//     }
//   } return newWord;
// }
function unstretch(word) {
  let finalWord = "";
  let lastChar;
  for (let i = 0; i < word.length; i++) {
    let currentChar = word[i];
    if (!lastChar || currentChar !== lastChar) {
      finalWord += currentChar;
      lastChar = currentChar;
    }
  }
  return finalWord;
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
const res = setupAndRun(unstretch);
console.log("THE RESULTS: \r\n", ...res.map(r => r.message + "\r\n"));
console.log("DEBUGGING INFO: \r\n", res);
function setupAndRun(func) {
  const tests = [
    {
      input: "ppoeemm",
      expectation: "poem"
    },
    {
      input: "wiiiinnnnd",
      expectation: "wind"
    },
    {
      input: "ttiiitllleeee",
      expectation: "title"
    },
    {
      input: "cccccaaarrrbbonnnnn",
      expectation: "carbon"
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
