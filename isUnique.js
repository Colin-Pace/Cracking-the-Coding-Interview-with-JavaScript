function isUnique(str) {
  const chars = {};
  for (let i = 0; i < str.length; i++) {
    if (chars[str[i]]) {
      return false;
    }
    chars[str[i]] = true;
  }
  return true;
}

const inputOne = "isunqe";
const inputTwo = "racecaar";
console.log(isUnique(inputOne), isUnique(inputTwo));