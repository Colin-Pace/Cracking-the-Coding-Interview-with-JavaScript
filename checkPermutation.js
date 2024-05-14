// function checkPermutation(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
  
//   return s.split("").sort().join() === 
//          t.split("").sort().join();
// }

// const inputOne = "horserace";
// const inputTwo = "racehorse";
// const inputThree = "carrace";

// console.log(checkPermutation(inputOne, inputTwo));
// console.log(checkPermutation(inputOne, inputThree));


// __________________________________________________________________


function checkPermutation(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let letters = {};
  for (let i = 0; i < s.length; i++) {
    if (letters[s[i]]) {
      letters[s[i]] += 1;
    } else {
      letters[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (letters[t[i]]) {
      letters[t[i]] -= 1;
    } else {
      return false;
    }
  }

  for (let i in letters) {
    if (letters[i] !== 0) {
      return false;
    }
  }
  
  return true;
}

const inputOne = "horserace";
const inputTwo = "racehorse";
const inputThree = "carrace";

console.log(checkPermutation(inputOne, inputTwo));
console.log(checkPermutation(inputOne, inputThree));