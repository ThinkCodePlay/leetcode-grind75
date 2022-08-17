// https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// example:
// 1. [(]) // check if this is valid
// 2. [({})] // check if this is valid
// 3. [](){} // assume this is the case

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let top = "";
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    console.log(stack);
    switch (element) {
      case "(":
      case "[":
      case "{":
        stack.push(element);
        break;
      case ")":
        top = stack.pop();
        if (top !== "(") {
          return false;
        }
        break;
      case "]":
        top = stack.pop();
        if (top !== "[") {
          return false;
        }
        break;
      case "}":
        top = stack.pop();
        if (top !== "{") {
          return false;
        }
        break;
      default:
        break;
    }
  }
  if (stack.length > 0) {
    return false;
  }
  
  return true;
};

const str = "[{()}]";
const res = isValid(str);
console.log(res);
