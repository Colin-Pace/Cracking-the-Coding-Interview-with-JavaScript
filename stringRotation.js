function isRotation(s1, s2) {
  let len = s1.length;
  if (len === s2.length && len > 0) {
    let s1s1 = s1 + s1;
    return s1s1.includes(s2);
  }
  return false;
}

const inputOne = "erbottlewat";
const inputTwo = "waterbottle";
const inputThree = "incorrectAnswer";

console.log(
  isRotation(inputOne, inputTwo),
  isRotation(inputOne, inputThree)
);