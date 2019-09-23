// function palindrome(str) {
//     let singleStr = removeSpecialSpace(str);
//     let reverseStr = singleStr.split('').reverse().join('');
//     if (singleStr === '' || singleStr === reverseStr) {
//         return true;
//     }
//     return false;
//   }
  
//   function removeSpecialSpace(str) {
//     let specialChar = '!@#$%^&*()_\/-|,.+=?;:'
//     let specialCharArr = specialChar.split('')
//     let strArr = str.split('');
//     let strNoSpecial = [];
//     for (let i = 0; i < strArr.length; i++) {
//         let currentChar = strArr[i];
//         if (!specialCharArr.includes(currentChar)) {
//             strNoSpecial.push(currentChar);
//         }
//     }
//     return strNoSpecial.join('').split(' ').join('').toLowerCase();
//   }

function palindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
    if (cleanStr.length < 2) {
        return true;
    }
    let firstChar = cleanStr[0];
    let lastChar = cleanStr[cleanStr.length-1];
    if (firstChar === lastChar) {
        return palindrome(cleanStr.slice(1, cleanStr.length-1))
    }

    return false;
}

palindrome("A man, a plan, a canal. Panama");

//   console.log(removeSpecialSpace("A man, a plan, a canal. Panama"))