const canConstruct = (target, wordbank, memo = {}) => {
  if (target === '') return true;
  if (target in memo) return memo[target]

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordbank, memo) === true) {
        memo[target] = true
        return memo[target];
      }
    }
  }

  memo[target] = false;
  return memo[target];
};
// m = target.length
// n = wordBank.length
// O(n*m^2) Time and O(m^2) Space

const old_canConstruct = (target, wordbank) => {
  if (target === '') return true;

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordbank) === true) {
        return true;
      }
    }
  }

  return false;
};
// m = target.length
// n = wordBank.length
// O(n^m * m) Time and O(m^2) Space


console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", 
  ["e",
  "ee",
  "eee",
  "eeee",
  "eeeee",
  "eeeeee",
])); // false