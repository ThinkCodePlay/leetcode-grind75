// https://leetcode.com/problems/valid-anagram/
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      map[char] = map[char] + 1;
    } else {
      map[char] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (map[char]) {
      map[char] = map[char] - 1;
    }
    else {
        return false
    }
  }
  // loop over map and see if there is char left
  for (let i in map) {
    const val = map[i];
    if (val > 0) {
      return false; // found char not in targer
    }
  }
  return true;
};

const s = "car";
const t = "car";
console.log(isAnagram(s, t));
