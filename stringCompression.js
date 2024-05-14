function compressBad(str) {
  let compressedString = "";
  let countConsecutive = 0;
  for (let i = 0; i < str.length; i++) {
    countConsecutive++;

    if (i + 1 >= str.length || str[i] !== str[i + 1]) { // end of string || not consecutive are the conditions
      compressedString += "" + str[i] + countConsecutive;
      countConsecutive = 0;
    }
  }
  return compressedString.length < str.length ? compressedString : str;
}

const inputOne = "aabcccccaaa";
console.log(compressBad(inputOne));