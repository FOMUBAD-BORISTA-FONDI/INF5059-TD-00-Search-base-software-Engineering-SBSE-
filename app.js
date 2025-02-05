const readline = require("readline");
const binarySearch = require("./exercises/exercise-1");
const Graph = require("./exercises/exercise-2");
const knapsack = require("./exercises/exercise-3");
const mergeIntervals = require("./exercises/exercise-4");
const maxSubarraySum = require("./exercises/exercise-5");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to display the menu
function showMenu() {
  console.log("\n=== JavaScript Algorithms Project ===");
  console.log("1️⃣  Binary Search");
  console.log("2️⃣  Graph Traversal (BFS & DFS)");
  console.log("3️⃣  Knapsack Problem");
  console.log("4️⃣  Merge Intervals");
  console.log("5️⃣  Kadane’s Algorithm");
  console.log("0️⃣  Exit");
  rl.question(
    "\nEnter the number of the exercise you want to run: ",
    handleChoice
  );
}

// Function to handle user input
function handleChoice(choice) {
  switch (choice.trim()) {
    case "1":
      console.log("\n🔍 Running Binary Search...");
      let arr = [1, 3, 5, 7, 9, 11];
      let target = 5;
      console.log(`Array: [${arr}] | Target: ${target}`);
      console.log(`Output: Index ${binarySearch(arr, target)}`);
      break;

    case "2":
      console.log("\n🔗 Running Graph Traversal (BFS & DFS)...");
      const g = new Graph();
      g.addEdge(1, 2);
      g.addEdge(1, 3);
      g.addEdge(2, 4);
      g.addEdge(3, 5);
      console.log("BFS Traversal:", g.bfs(1));
      console.log("DFS Traversal:", g.dfs(1));
      break;

    case "3":
      console.log("\n🎒 Running Knapsack Problem...");
      let values = [60, 100, 120];
      let weights = [10, 20, 30];
      let maxWeight = 50;
      console.log(
        `Items: Values = [${values}], Weights = [${weights}], Max Capacity = ${maxWeight}`
      );
      console.log(
        `Output: Maximum Value = ${knapsack(values, weights, maxWeight)}`
      );
      break;

    case "4":
      console.log("\n📅 Running Merge Intervals...");
      let intervals = [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ];
      console.log(`Input Intervals: ${JSON.stringify(intervals)}`);
      console.log(`Output: ${JSON.stringify(mergeIntervals(intervals))}`);
      break;

    case "5":
      console.log("\n📈 Running Kadane’s Algorithm...");
      let arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
      console.log(`Array: [${arr2}]`);
      console.log(`Output: Maximum Subarray Sum = ${maxSubarraySum(arr2)}`);
      break;

    case "0":
      console.log("\n👋 Exiting program. Goodbye!");
      rl.close();
      return;

    default:
      console.log("\n❌ Invalid choice. Please enter a number between 0-5.");
  }

  // Show the menu again after execution
  setTimeout(showMenu, 2000);
}

// Start the program by showing the menu
showMenu();

// const binarySearch = require("./exercises/exercise-1");
// const Graph = require("./exercises/exercise-2");
// const knapsack = require("./exercises/exercise-3");
// const mergeIntervals = require("./exercises/exercise-4");
// const maxSubarraySum = require("./exercises/exercise-5");

// console.log("=== Exercise 1: Binary Search ===");
// console.log("Binary Search Output:", binarySearch([1, 3, 5, 7, 9, 11], 5));

// console.log("\n=== Exercise 2: Graph Traversal (BFS & DFS) ===");
// const g = new Graph();
// g.addEdge(1, 2);
// g.addEdge(1, 3);
// g.addEdge(2, 4);
// g.addEdge(3, 5);
// console.log("BFS Traversal:", g.bfs(1));
// console.log("DFS Traversal:", g.dfs(1));

// console.log("\n=== Exercise 3: Knapsack Problem ===");
// console.log("Knapsack Output:", knapsack([60, 100, 120], [10, 20, 30], 50));

// console.log("\n=== Exercise 4: Merge Intervals ===");
// console.log(
//   "Merged Intervals:",
//   mergeIntervals([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );

// console.log("\n=== Exercise 5: Maximum Subarray Sum ===");
// console.log(
//   "Maximum Subarray Sum:",
//   maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// );
