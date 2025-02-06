function maxSubarraySum(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let num of arr) {
    currentSum = Math.max(num, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

module.exports = maxSubarraySum;

// Example test case
// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log("Maximum Subarray Sum:", maxSubarraySum(arr));

// function maxSubarraySum(arr) {
//   let maxSum = -Infinity,
//     currentSum = 0;

//   for (let num of arr) {
//     currentSum = Math.max(num, currentSum + num);
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// }

// module.exports = maxSubarraySum;
