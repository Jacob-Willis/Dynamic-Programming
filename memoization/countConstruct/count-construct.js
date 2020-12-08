const allConstruct = (target, wordbank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;

  let totalCount = 0;

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const numWaysForRest = allConstruct(suffix, wordbank, memo);
      totalCount += numWaysForRest;
    }
  }

  memo[target] = totalCount;
  return totalCount;
};
// m = target.length
// n = wordBank.length
// O(n*m^2) Time and O(m^2) Space

const old_countConstruct = (target, wordbank) => {
  if (target === '') return 1;

  let totalCount = 0;

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const numWaysForRest = allConstruct(suffix, wordbank);
      totalCount += numWaysForRest;
    }
  }

  return totalCount;
};
// m = target.length
// n = wordBank.length
// O(n^m * m) Time and O(m^2) Space


console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 4
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", 
  ["e",
  "ee",
  "eee",
  "eeee",
  "eeeee",
  "eeeeee",
])); // 0
