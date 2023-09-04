module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketArray = [];
  let n = 0;
  for (let i = 0; i < bracketsConfig.length; i++) {
    for (let j = 0; j < bracketsConfig[i].length; j++) {
      bracketArray.push(bracketsConfig[i][j]);
    }
  }
  let bracketsString = bracketArray.join('');
  for (let bracket of str) {
    let index = bracketsString.indexOf(bracket);
    if (index === -1) {
      continue
    }
    if (index % 2 === 0) {
      if (bracketsString[index] === bracketsString[index + 1]) {
        if (stack.length === 0) {
          stack.push(index + 1);
        }
        else if (bracketsString[index] != bracketsString[stack[stack.length - 1]]) {
          // let i = stack[stack.length - 1];
          stack.push(index + 1);
        }
        else {
          stack.pop();
        }
      } else {
        stack.push(index + 1);

      }


    } else {
      if (stack.pop() !== index) {
        return false;
      }
    }
  }
  return stack.length === 0;
}


