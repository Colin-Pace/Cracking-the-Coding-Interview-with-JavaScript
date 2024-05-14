function oneEditAway(strs) {
  let [first, second] = strs;
  if (first.length === second.length) {
    return oneEditReplace(first, second);
  } else if (first.length + 1 === second.length) {
    return oneEditInsert(first, second);
  } else if (first.length - 1 === second.length) {
    return oneEditInsert(second, first);
  }
  return false;
}

function oneEditReplace(s1, s2) {
  let foundDifference = false;
  for (let i = 0; i < s1.length; i++) {
    if(s1.charAt(i) !== s2.charAt(i)) {
      if (foundDifference) {
        return false;
      }
      foundDifference = true;
    }
  }
  return true;
}

function oneEditInsert(s1, s2) {
  let index1 = 0;
  let index2 = 0;
  while (index2 < s2.length && index1 < s1.length) {
    if (s1.charAt(index1) !== s2.charAt(index2)) {
      if (index1 !== index2) { // catches a mismatch after incrementation to check for incongruity in letters other than from one missing letter
        return false;
      }
      index2++;
    } else {
      index1++;
      index2++;
    }
  }
  return true;
}

const inputOne = ["pale", "ple"];
const inputTwo = ["pales", "pale"];
const inputThree = ["pale", "bale"];
const inputFour = ["pale", "bae"];

console.log(
  oneEditAway(inputOne),
  oneEditAway(inputTwo),
  oneEditAway(inputThree),
  oneEditAway(inputFour)
);