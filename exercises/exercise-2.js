class Graph {
  constructor() {
    this.adjList = {};
  }

  addEdge(u, v) {
    if (!this.adjList[u]) this.adjList[u] = [];
    if (!this.adjList[v]) this.adjList[v] = [];
    this.adjList[u].push(v);
    this.adjList[v].push(u); // Undirected Graph
  }

  bfs(start) {
    let queue = [start];
    let visited = new Set();
    let result = [];

    while (queue.length) {
      let node = queue.shift();
      if (!visited.has(node)) {
        result.push(node);
        visited.add(node);
        queue.push(...this.adjList[node]);
      }
    }
    return result;
  }

  dfs(start, visited = new Set(), result = []) {
    if (!visited.has(start)) {
      result.push(start);
      visited.add(start);
      this.adjList[start].forEach((neighbor) =>
        this.dfs(neighbor, visited, result)
      );
    }
    return result;
  }
}

// Example test case
const g = new Graph();
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(3, 5);

console.log("BFS Traversal:", g.bfs(1));
console.log("DFS Traversal:", g.dfs(1));

// class Graph {
//   constructor() {
//     this.adjList = {};
//   }

//   addEdge(u, v) {
//     if (!this.adjList[u]) this.adjList[u] = [];
//     if (!this.adjList[v]) this.adjList[v] = [];
//     this.adjList[u].push(v);
//     this.adjList[v].push(u);
//   }

//   bfs(start) {
//     let queue = [start];
//     let visited = new Set();
//     let result = [];

//     while (queue.length) {
//       let node = queue.shift();
//       if (!visited.has(node)) {
//         result.push(node);
//         visited.add(node);
//         queue.push(...this.adjList[node]);
//       }
//     }
//     return result;
//   }

//   dfs(start, visited = new Set(), result = []) {
//     if (!visited.has(start)) {
//       result.push(start);
//       visited.add(start);
//       this.adjList[start].forEach((neighbor) =>
//         this.dfs(neighbor, visited, result)
//       );
//     }
//     return result;
//   }
// }

// module.exports = Graph;
