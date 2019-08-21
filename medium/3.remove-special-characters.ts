// Challenge link here: https://edabit.com/challenge/k7CwrsKPHrEL8h4z6
function removeSpecialCharacters(str) {
  var newString="";
  for (var i = 0; i < str.length; i++){
    var curChar= str[i];
    if (curChar !='!' && curChar !='@' && curChar !='#' && curChar !='$' && curChar !='%' && curChar !='^' && curChar !='&' && curChar !='*' && curChar !='\\' && curChar !='(' && curChar !=')'  && curChar !='.'){
      newString += curChar;
    }
  }
  return newString
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
const res = setupAndRun(removeSpecialCharacters);
console.log("THE RESULTS: \r\n", ...res.map(r => r.message + "\r\n"));
console.log("DEBUGGING INFO: \r\n", res);
function setupAndRun(func) {
  const tests = [
    {
      input: "The quick brown fox!",
      expectation: "The quick brown fox"
    },
    {
      input: "%fd76$fd(-)6GvKlO.",
      expectation: "fd76fd-6GvKlO"
    },
    {
      input: "D0n$c sed 0di0 du1",
      expectation: "D0nc sed 0di0 du1"
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