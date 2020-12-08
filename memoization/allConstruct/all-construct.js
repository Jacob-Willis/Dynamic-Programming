const allConstruct = (target, wordbank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return [[]];

  const result = [];

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordbank, memo);
      const targetWays = suffixWays.map(way => [word, ...way]);
      result.push(...targetWays);
    }
  }

  memo[target] = result
  return result;
}

const old_allConstruct = (target, wordbank) => {
  if (target === '') return [[]];

  const result = [];

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordbank);
      const targetWays = suffixWays.map(way => [word, ...way]);
      result.push(...targetWays);
    }
  }

  return result;
}
// m = target.length
// n = wordBank.length
// O(n^m) Time and O(m) Space

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// [
//  [ 'purp', 'le' ],
//  [ p', 'ur', 'p', 'le' ]
// ]
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
// [
//  [ 'ab', 'cd', 'ef' ],
//  [ 'ab', 'c', 'def' ],
//  [ 'abc', 'def' ],
//  [ 'abcd', 'ef' ]
// ]
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
// []
console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaa",]));
// []
