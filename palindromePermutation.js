function palindromePermutation(str) {
  let letters = {};
  for (let i = 0; i < str.length; i++) {
    if (letters[str[i]]) {
      letters[str[i]] += 1;
    } else {
      letters[str[i]] = 1;
    }
  }

  let oddCount = 0;
  for (let i in letters) {
    if (letters[i] % 2 !== 0) {
      oddCount++;
      if (oddCount === 2) {
        return false;
      } 
    }
  }

  return true;
}

const inputOne = "tacocat";
const inputTwo = "notpalindromepermutation";
console.log(palindromePermutation(inputOne),
            palindromePermutation(inputTwo));