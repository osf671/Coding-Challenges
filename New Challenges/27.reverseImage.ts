function reverseImage(image) {
    let finalArray = [];
    for (let arr of image) {
        let newarr = arr.map(v => v == 0? 1 : 0)
        finalArray.push(newarr);
    }
    return finalArray;
}

console.log(reverseImage([
    [1, 0, 0, 0, 0], 
    [1, 0, 0, 1, 1], 
    [1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 0], 
    [1, 1, 1, 0, 0]
  ]))