// Challenge #1 - returns second largest number
const secondLargest = (arr) => {
    if (!arr.some(isNaN)) {
    const sorted = arr.sort((a, b) => b - a);
    return console.log(sorted.at(1));
    }
    return console.log('Please provide array of numbers.')
  };
  
  const array = [246, 16, 61584, 547, 1, 3, 99, 48, 1465, 65, 2023];
  secondLargest(array);
  
  // Challenge #2 - returns letter from alphabet
  const letterAtPosition = (position) => {
    const charDecimal = position + 96;
    if (charDecimal > 1 && charDecimal <= 122) {
      console.log(`Your letter is: ${String.fromCharCode(charDecimal)}`);
    } else {
      console.log("invalid");
    }
  };
  letterAtPosition(21);
  
  // Challenge #3 - pair occurences
  const str1 = "";
  const str2 = "";
  
  const findCommonSubstring = (str1, str2) => {
    let count = 0
    if (str1 && str2) {
      const str1Lower = str1.toLowerCase()
      const str2Lower = str2.toLowerCase()
      const regex = /.{1,2}/g
      const normal = str1Lower.match(regex);
      const shifted = str1Lower.slice(1).match(regex);
      const merged = shifted.concat(normal);
      merged.forEach((pair) => {
        if (str2Lower.indexOf(pair) !== -1 && pair.length === 2 ) count++
      })
  
      return console.log(`Number of pair occurences between 2 strings: ${count}`)
    } 
      return count
  };
  
  