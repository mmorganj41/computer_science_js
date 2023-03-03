class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        // a Node starts with a given data property
        // a Node also has a .next property initialized as null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        // a Linked List starts with a "head" property intialized as null
    }
    appendNode(data){
        const node = new Node(data);

        let nextNode = this
        while (nextNode.next !== null) {
            nextNode = nextNode.next;
        }
        nextNode.next = node;
        
        // creates a new node with the given data and adds it to back of the list
    }
    prependNode(data){
        const node = new Node(data);
        node.next = this.next;
        this.next = node;
        // creates a new node with the given data and adds it to the front of the list
    }
    pop(){
        let previousNode = this;
        let currentNode = this.next;

        while (currentNode.next !== null) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = null;
        
        return currentNode;
        // removes the last node from the list and returns it
    }
    removeFromFront(){
        const removedNode = this.next;

        if (removedNode) {
            this.next = removedNode.next;
        }

        return removedNode;
        
        // remove the head node from the list and return it
        // the next node in the list is the new head node
    }
    insertAt(X, data){
        const newNode = new Node(data);

        let currentNode = this;
        for (let i = 1; i<=X; i++) {
            currentNode = currentNode.next
            if (currentNode.next === null) break;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;

        return newNode;
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head
    }
    removeAt(X){
        let currentNode = this;

        for (let i=1; i<=X; i++) {
            currentNode = currentNode.next;
            if (currentNode.next === null) break;
        }
        const removedNode = currentNode.next;
        currentNode.next = (removedNode) ? removedNode.next : null;
        return removedNode

        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed
    }
    search(data){
        let currentNode = this;
        let i = 0;
        while (currentNode.next) {
            currentNode = currentNode.next;
            if (currentNode.data === data) return i
            i++
        }
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false

        return false
    }
    sort(){
        // sort the Linked List in ascending order of data values
        let currentNode = this.next;
        let startingIndex = 0;
        let i = startingIndex;

        while (currentNode.next) {
            let min = {value: currentNode.data, location: i};
            let searchedNode = currentNode.next;

            while (searchedNode) {
                i++

                if (searchedNode.data < min.value) min.value = searchedNode.data, min.location = i;
                
                searchedNode = searchedNode.next;
            }

            const movedNode = this.insertAt(startingIndex, (this.removeAt(min.location).data));
            currentNode = movedNode.next;
            startingIndex++
            i = startingIndex;            
        }
    }
    //  Helper functions to avoid calling this.head vs next
    get next() {
        return this.head;
    }
    set next(node) {
        this.head = node;
    }
}

module.exports = {
    Node,
    LinkedList
}