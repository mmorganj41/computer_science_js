class BinaryNode {
    constructor(data) {
        // a node has data, left, and right pointers
        // left and right are intialized as null
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        // when a new Tree is made, it has a root property
        this.root = null;
    }
    insert(data) {
        // add a new Node to the tree, with data as the Node's data
        // if the data is already in the tree, do not insert it
        if (this.root) {
            helperInsert(this.root, data);
        } else {
            this.root = new BinaryNode(data);
        }


        function helperInsert(node, data) {
            if (data < node.data) {
                if (node.left) {
                    helperInsert(node.left, data);
                } else {
                    node.left = new BinaryNode(data);
                }
            } else if (data > node.data) {
                if (node.right) {
                    helperInsert(node.right, data);
                } else {
                    node.right = new BinaryNode(data);
                }
            }
        }
    }
    search(val) {
        // search the Tree for a node with the given value
        // if the node exists, return it
        // if the node doesn't exist, return false
        if (!this.root) return false;

        return helperSearch(this.root, val);

        function helperSearch(node, val) {
            if (val === node.data) {
                return true;
            } else if (val < node.data) {
                if (node.left) return helperSearch(node.left, val);
            } else if (val > node.data) {
                if (node.right) return helperSearch(node.right, val);
            }

            return false;
        }
    }
    size(node) {
        // calculate the number of nodes in the tree, starting from the given node
        let count = 0;
        if (!this.root) return count;

        helperSizer(this.root);

        return count;

        function helperSizer(node) {
            count++;

            if (node.left) helperSizer(node.left);

            if (node.right) helperSizer(node.right);
        }
    }
    getMax() {
        // return the maximum value stored in the tree

        if (!this.root) return null;

        return helperGetMax(this.root);

        function helperGetMax(node) {
            if (node.right) {
                return helperGetMax(node.right);
            } else {
                return node.data;
            }
        }
    }
    height(node = this.root) {
        // calculate the maximum amount of nodes in any one path from the given node
        // if not given a specific node, default to using the root node

        if (!node) return 0;

        return 1 + helperCheckDepth(node);

        function helperCheckDepth(node) {
            let left = 0;
            let right = 0;

            if (node.left) left = 1 + helperCheckDepth(node.left);

            if (node.right) right = 1 + helperCheckDepth(node.right);

            return Math.max(left, right);
        }
    }
    isBalanced(node = this.root) {
        // return true or false based on whether the sub-tree starting at the given node is balanced
        // A tree is imbalanced if the height of one branch exceeds the other side by more than one level
        // A tree is balanced if all branches end within one level of each other.

        if (!node) return false;

        return helperCheckDifference(node, true);

        function helperCheckDifference(node, bothLimbs) {

            if (!node.left && !node.right) {
                return true;
            } else if (node.left && node.right) {
                return helperCheckDifference(node.left, true) && helperCheckDifference(node.right, true);
            } else {
                if (bothLimbs) {
                    if (node.right) {
                        return helperCheckDifference(node.right, false);
                    } else {
                        return helperCheckDifference(node.left, false);
                    }
                } else {
                    return false;
                }
            }
        }
    }
}

module.exports = {
    BinaryNode,
    BinaryTree
}