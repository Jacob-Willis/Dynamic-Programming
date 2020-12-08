const canConstruct = (targetString, wordbank) => {
  const table = Array(targetString.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= targetString.length; i++) {
     if (table[i]) {
       for (let word of wordbank) {
         if (targetString.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
         }
       }
     }
  }

  return table[targetString.length];
};
// m = targetString.length
// n = wordbank.length
// O(m^2 * n) Time and O(m^2) Space

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
