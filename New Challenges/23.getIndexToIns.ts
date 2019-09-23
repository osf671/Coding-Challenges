/* Return the lowest index at which a value (second argument) 
should be inserted into an array (first argument) once it has 
been sorted. The returned value should be a number. For example, 
getIndexToIns([1,2,3,4], 1.5)should return 1because it is greater 
than 1(index 0), but less than 2(index 1). Likewise, getIndexToIns([20,3,5], 19)
should return 2because once the array has been sorted it will look like
 [3,5,20]and 19is less than 20(index 2) and greater than 5(index 1). */

 function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
      return a - b;
    });
  
    for (var a = 0; a < arr.length; a++) {
        let currentNum = arr[a];
      if (currentNum >= num) {
          console.log(a)
          return a;
      }
    }
  
    return arr.length;
  }
  
getIndexToIns([5, 3, 20, 3], 5);