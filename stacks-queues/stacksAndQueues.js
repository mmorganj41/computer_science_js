// STACK IMPLEMENTATION
class Stack {
    constructor() {
      this.items = []
    }
    push(item){
      this.items.push(item)
    }
    pop(){
      return this.items.pop()
    }
    peek(){
      return this.items[this.items.length - 1]
    }
    isEmpty(){
      return this.items.length === 0
    }
}

// this function will take in a string as input
// it will return true or false based on whether the brackets are properly matched
// the valid brackets it will scan for are {}, [], and ()
// you must use a Stack in your implementation of this function
// refer to the bracket matching readMe.md for more details
function bracketMatching(input){
  const removedNonBrackets = input.replace(/[^\(\)\[\]\{\}]/g, '');

  const bracketDict = {
    '[': ']',
    '(': ')',
    '{': '}',
  }

  const stack = new Stack;

  for (const char of removedNonBrackets) {
    if (Object.values(bracketDict).includes(char)) {
      if (bracketDict[stack.peek()] === char) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  if (stack.isEmpty()) {
    return true;
  } else {
    return false;
  }
}

class Node{
    constructor(data, priority){
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

// This priority queue is implemented as a Linked List
// Your challenge is to implement the insert method of the priority queue
class priorityQueue{
    constructor(){
        this.head = null;
    }
    enqueue(data, priority){
        // Insert the new data into the proper place in the queue
        // the lowest priority number should be the head node
        // the priorities should remain in order
        // if two nodes have the same priority, put the new one first
        const node = new Node(data, priority);

        let previousNode = this;
        let currentNode = this.next;

        while (currentNode) {
          if (priority <= currentNode.priority) break;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }

        node.next = currentNode;
        previousNode.next = node;

    }
    peek(){
        // return the highest priority node in the queue
        return this.head;
    }
    dequeue(){
        // remove and return the highest priority node in the queue
        const node = this.next;
        this.next = node.next;
        node.next = null;

        return node;
    }
    get next() {
      return this.head;
    }
    set next(node) {
      this.head = node;
    }
}

    const pQ = new priorityQueue();
    pQ.enqueue("Alpha", 1);
    console.log(pQ);
    pQ.enqueue("Alpha2", 1);
    console.log(pQ);
    pQ.enqueue("Omega", 3);
    console.log(pQ);


module.exports = {
    bracketMatching,
    priorityQueue
}