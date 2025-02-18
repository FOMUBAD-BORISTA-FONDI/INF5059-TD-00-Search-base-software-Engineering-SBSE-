function knapsack(values, weights, W) {
  let n = values.length;
  let dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[n][W];
}

module.exports = knapsack;

// // Example test case
// const values = [60, 100, 120];
// const weights = [10, 20, 30];
// const maxWeight = 50;

// console.log("Knapsack Maximum Value:", knapsack(values, weights, maxWeight));

// function knapsack(values, weights, W) {
//   let n = values.length;
//   let dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

//   for (let i = 1; i <= n; i++) {
//     for (let w = 0; w <= W; w++) {
//       if (weights[i - 1] <= w) {
//         dp[i][w] = Math.max(
//           values[i - 1] + dp[i - 1][w - weights[i - 1]],
//           dp[i - 1][w]
//         );
//       } else {
//         dp[i][w] = dp[i - 1][w];
//       }
//     }
//   }
//   return dp[n][W];
// }

// module.exports = knapsack;
