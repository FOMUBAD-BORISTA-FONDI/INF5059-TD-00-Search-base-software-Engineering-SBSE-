const binarySearch = require("./exercises/exercise-1");
const Graph = require("./exercises/exercise-2");
const knapsack = require("./exercises/exercise-3");
const mergeIntervals = require("./exercises/exercise-4");
const maxSubarraySum = require("./exercises/exercise-5");

console.log("=== Exercise 1: Binary Search ===");
console.log("Binary Search Output:", binarySearch([1, 3, 5, 7, 9, 11], 5));

console.log("\n=== Exercise 2: Graph Traversal (BFS & DFS) ===");
const g = new Graph();
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(3, 5);
console.log("BFS Traversal:", g.bfs(1));
console.log("DFS Traversal:", g.dfs(1));

console.log("\n=== Exercise 3: Knapsack Problem ===");
console.log("Knapsack Output:", knapsack([60, 100, 120], [10, 20, 30], 50));

console.log("\n=== Exercise 4: Merge Intervals ===");
console.log(
  "Merged Intervals:",
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

console.log("\n=== Exercise 5: Maximum Subarray Sum ===");
console.log(
  "Maximum Subarray Sum:",
  maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);
