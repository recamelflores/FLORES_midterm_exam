function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
  