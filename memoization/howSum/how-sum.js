const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = bestSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [ ...remainderResult, num];
      return memo[targetSum];
    }
  }
 
  memo[targetSum] = null;
  return memo[targetSum];
} 
// m = targetSum
// n = numbers.length
// O(n*m^2) Time and O(m^2) Space

const old_howSum = (targetSum, numbers) => {
 if (targetSum === 0) return [];
 if (targetSum < 0) return null;
 
 for (let num of numbers) {
   const remainder = targetSum - num;
   const remainderResult = bestSum(remainder, numbers);
   if (remainderResult !== null) {
     return [ ...remainderResult, num];
   }
 }

 return null;
} 
// m = targetSum
// n = numbers.length 
// O(n^m * m) Time and O(m) Space

console.log(bestSum(7, [2, 3])); // [3, 2, 2]
console.log(bestSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(bestSum(7, [2, 4])); // null
console.log(bestSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(bestSum(300, [7, 14])); // null