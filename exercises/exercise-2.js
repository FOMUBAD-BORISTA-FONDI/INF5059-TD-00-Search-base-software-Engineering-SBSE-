class Graph {
  constructor() {
    this.adjList = {};
  }

  addEdge(u, v) {
    if (!this.adjList[u]) this.adjList[u] = [];
    if (!this.adjList[v]) this.adjList[v] = [];
    this.adjList[u].push(v);
    this.adjList[v].push(u);
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

module.exports = Graph;
