const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {      
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }

  return table[targetSum];
};
// m = targetSum
// n = numbers.length
// O(mn) Time and O(m) Space


console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [4, 2])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(800, [7, 14])); // false