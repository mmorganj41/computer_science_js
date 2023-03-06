class Graph {
  constructor() {
    // Create a property called `nodes` and set it equal to an empty object.
    // This will be our adjacency list.
    this.nodes = {};
  }

  addNode(node) {
    // If the node value passed in does not already exist in our adjacency
    // list, then add it as a key and set it equal to an empty array.
    if (!this.nodes[node]) this.nodes[node] = [];
  }

  addEdge(node, edge) {
    // If the node exists in our adjacency list, then push the edge into the
    // array of edges for that node.

    this.nodes[node]?.push(edge);
  }
}

module.exports = { Graph };
