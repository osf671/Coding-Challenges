function maskify(str) {
    let strArr = str.split('');
    let strLength = str.length;
    let maskedArr = [];
    if (strLength <= 4) {
      return str;
    }
  
    for (let i = 0; i < strLength; i++) {
      let currentChar = strArr[i];
      if(i < strLength - 4) {
        maskedArr.push('#');
      } else maskedArr.push(currentChar);
    }
    return maskedArr.join('');
  }
  
  // function maskify(str) {
  //   return str.split('').map((x, i, a) => i < a.length - 4 ? '#' : x).join('');
  // }
  
  maskify("8Ikhlf6yoxPOwi5cB014eWbRumj7vJ")