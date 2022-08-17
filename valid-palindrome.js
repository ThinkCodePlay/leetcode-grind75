// https://leetcode.com/problems/valid-palindrome/
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

function removeNonAlpha(str) {
  const replaced = str.replace(/[^a-z0-9]/gi, "");
  return replaced;
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const cleanedStr = removeNonAlpha(s).toLowerCase();

  let indexI = 0;
  let indexJ = cleanedStr.length - 1;

  while (indexI < indexJ) {
    if (cleanedStr[indexI] !== cleanedStr[indexJ]) {
      return false;
    }
    indexI++;
    indexJ--;
  }

  return true;
};

const s = "A man, a plan, a canal: Panama";
const res = isPalindrome(s);
console.log(res);

// 01 clean non alphanumeric values
// 02 make all lowercase
// 03 check valid palindrome
