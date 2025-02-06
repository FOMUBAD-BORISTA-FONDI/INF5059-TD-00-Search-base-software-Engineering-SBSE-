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

function showMenu() {
  console.log("\n=== JavaScript Algorithms Project ===");
  console.log("1️⃣  Binary Search - Exercise 1");
  console.log("2️⃣  Graph Traversal (BFS & DFS) - Exercise 2");
  console.log("3️⃣  Knapsack Problem - Exercise 3");
  console.log("4️⃣  Merge Intervals - Exercise 4");
  console.log("5️⃣  Kadane’s Algorithm - Exercise 5");
  console.log("0️⃣  Exit");
  rl.question(
    "\nEnter the number of the exercise you want to run: ",
    handleChoice
  );
}

function handleChoice(choice) {
  switch (choice.trim()) {
    case "1":
      getBinarySearchInput();
      break;
    case "2":
      runGraphTraversal();
      break;
    case "3":
      getKnapsackInput();
      break;
    case "4":
      getMergeIntervalsInput();
      break;
    case "5":
      getKadaneInput();
      break;
    case "0":
      console.log("\n👋 Exiting program. Goodbye!");
      rl.close();
      return;
    default:
      console.log("\n❌ Invalid choice. Please enter a number between 0-5.");
      setTimeout(showMenu, 2000);
  }
}

function getBinarySearchInput() {
  rl.question("\nEnter a sorted array (comma-separated): ", (arrInput) => {
    rl.question("Enter the target value: ", (target) => {
      let arr = arrInput.split(",").map(Number);
      target = Number(target);
      console.log(
        `\n🔍 Running Binary Search on [${arr}] for target ${target}...`
      );
      console.log(`Output: Index ${binarySearch(arr, target)}`);
      setTimeout(showMenu, 2000);
    });
  });
}

function runGraphTraversal() {
  console.log("\n🔗 Running Graph Traversal (BFS & DFS)...");
  const g = new Graph();
  g.addEdge(1, 2);
  g.addEdge(1, 3);
  g.addEdge(2, 4);
  g.addEdge(3, 5);
  console.log("BFS Traversal:", g.bfs(1));
  console.log("DFS Traversal:", g.dfs(1));
  setTimeout(showMenu, 2000);
}

function getKnapsackInput() {
  rl.question("\nEnter item values (comma-separated): ", (valuesInput) => {
    rl.question("Enter item weights (comma-separated): ", (weightsInput) => {
      rl.question("Enter max weight capacity: ", (maxWeight) => {
        let values = valuesInput.split(",").map(Number);
        let weights = weightsInput.split(",").map(Number);
        maxWeight = Number(maxWeight);
        console.log(`\n🎒 Running Knapsack Problem...`);
        console.log(
          `Items: Values = [${values}], Weights = [${weights}], Max Capacity = ${maxWeight}`
        );
        console.log(
          `Output: Maximum Value = ${knapsack(values, weights, maxWeight)}`
        );
        setTimeout(showMenu, 2000);
      });
    });
  });
}

function getMergeIntervalsInput() {
  rl.question(
    "\nEnter intervals as pairs (e.g. 1-3,2-6,8-10): ",
    (intervalsInput) => {
      let intervals = intervalsInput
        .split(",")
        .map((pair) => pair.split("-").map(Number));
      console.log(
        `\n📅 Running Merge Intervals on ${JSON.stringify(intervals)}...`
      );
      console.log(`Output: ${JSON.stringify(mergeIntervals(intervals))}`);
      setTimeout(showMenu, 2000);
    }
  );
}

function getKadaneInput() {
  rl.question("\nEnter an array of numbers (comma-separated): ", (arrInput) => {
    let arr = arrInput.split(",").map(Number);
    console.log(`\n📈 Running Kadane’s Algorithm on [${arr}]...`);
    console.log(`Output: Maximum Subarray Sum = ${maxSubarraySum(arr)}`);
    setTimeout(showMenu, 2000);
  });
}

showMenu();

// const readline = require("readline");
// const binarySearch = require("./exercises/exercise-1");
// const Graph = require("./exercises/exercise-2");
// const knapsack = require("./exercises/exercise-3");
// const mergeIntervals = require("./exercises/exercise-4");
// const maxSubarraySum = require("./exercises/exercise-5");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // Function to display the menu
// function showMenu() {
//   console.log("\n=== JavaScript Algorithms Project ===");
//   console.log("1️⃣  Binary Search");
//   console.log("2️⃣  Graph Traversal (BFS & DFS)");
//   console.log("3️⃣  Knapsack Problem");
//   console.log("4️⃣  Merge Intervals");
//   console.log("5️⃣  Kadane’s Algorithm");
//   console.log("0️⃣  Exit");
//   rl.question(
//     "\nEnter the number of the exercise you want to run: ",
//     handleChoice
//   );
// }

// // Function to handle user input
// function handleChoice(choice) {
//   switch (choice.trim()) {
//     case "1":
//       console.log("\n🔍 Running Binary Search...");
//       let arr = [1, 3, 5, 7, 9, 11];
//       let target = 5;
//       console.log(`Array: [${arr}] | Target: ${target}`);
//       console.log(`Output: Index ${binarySearch(arr, target)}`);
//       break;

//     case "2":
//       console.log("\n🔗 Running Graph Traversal (BFS & DFS)...");
//       const g = new Graph();
//       g.addEdge(1, 2);
//       g.addEdge(1, 3);
//       g.addEdge(2, 4);
//       g.addEdge(3, 5);
//       console.log("BFS Traversal:", g.bfs(1));
//       console.log("DFS Traversal:", g.dfs(1));
//       break;

//     case "3":
//       console.log("\n🎒 Running Knapsack Problem...");
//       let values = [60, 100, 120];
//       let weights = [10, 20, 30];
//       let maxWeight = 50;
//       console.log(
//         `Items: Values = [${values}], Weights = [${weights}], Max Capacity = ${maxWeight}`
//       );
//       console.log(
//         `Output: Maximum Value = ${knapsack(values, weights, maxWeight)}`
//       );
//       break;

//     case "4":
//       console.log("\n📅 Running Merge Intervals...");
//       let intervals = [
//         [1, 3],
//         [2, 6],
//         [8, 10],
//         [15, 18],
//       ];
//       console.log(`Input Intervals: ${JSON.stringify(intervals)}`);
//       console.log(`Output: ${JSON.stringify(mergeIntervals(intervals))}`);
//       break;

//     case "5":
//       console.log("\n📈 Running Kadane’s Algorithm...");
//       let arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//       console.log(`Array: [${arr2}]`);
//       console.log(`Output: Maximum Subarray Sum = ${maxSubarraySum(arr2)}`);
//       break;

//     case "0":
//       console.log("\n👋 Exiting program. Goodbye!");
//       rl.close();
//       return;

//     default:
//       console.log("\n❌ Invalid choice. Please enter a number between 0-5.");
//   }

//   // Show the menu again after execution
//   setTimeout(showMenu, 2000);
// }

// // Start the program by showing the menu
// showMenu();
